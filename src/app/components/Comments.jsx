"use client";

import { useState, useEffect } from 'react';

const Comments = () => {
  // State for comments and new comment form
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true); // Show form by default
  const [userReactions, setUserReactions] = useState({});
  const [showReplyForm, setShowReplyForm] = useState({});
  const [replyText, setReplyText] = useState({});
  const [replyAuthor, setReplyAuthor] = useState({});
  const [activeComment, setActiveComment] = useState(null);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('portfolioComments') || '[]');
    setComments(savedComments);
    
    // Load user reactions
    const savedReactions = JSON.parse(localStorage.getItem('portfolioUserReactions') || '{}');
    setUserReactions(savedReactions);
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolioComments', JSON.stringify(comments));
  }, [comments]);

  // Save user reactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolioUserReactions', JSON.stringify(userReactions));
  }, [userReactions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'comment') {
      setNewComment(value);
    } else if (name === 'name') {
      setUserName(value);
    }
  };

  const handleReplyChange = (commentId, e) => {
    const { name, value } = e.target;
    if (name === 'replyText') {
      setReplyText(prev => ({ ...prev, [commentId]: value }));
    } else if (name === 'replyAuthor') {
      setReplyAuthor(prev => ({ ...prev, [commentId]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newComment.trim() || !userName.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newCommentObj = {
        id: Date.now(),
        text: newComment,
        author: userName,
        date: new Date().toLocaleDateString(),
        likes: 0,
        dislikes: 0,
        replies: []
      };
      
      setComments(prevComments => [newCommentObj, ...prevComments]);
      setNewComment('');
      setUserName('');
      setIsSubmitting(false);
      setShowForm(false);
    }, 500);
  };

  const handleReply = (commentId) => {
    if (!replyText[commentId]?.trim() || !replyAuthor[commentId]?.trim()) {
      return;
    }
    
    const newReply = {
      id: Date.now(),
      text: replyText[commentId],
      author: replyAuthor[commentId],
      date: new Date().toLocaleDateString(),
      likes: 0,
      dislikes: 0
    };
    
    setComments(prevComments => 
      prevComments.map(comment => 
        comment.id === commentId 
          ? { ...comment, replies: [...comment.replies, newReply] } 
          : comment
      )
    );
    
    // Reset reply form
    setReplyText(prev => ({ ...prev, [commentId]: '' }));
    setReplyAuthor(prev => ({ ...prev, [commentId]: '' }));
    setShowReplyForm(prev => ({ ...prev, [commentId]: false }));
    setActiveComment(null);
  };

  const handleReaction = (commentId, type) => {
    // Check if user has already reacted
    const reactionKey = `comment_${commentId}`;
    if (userReactions[reactionKey] === type) {
      // Remove reaction
      setUserReactions(prev => {
        const newReactions = { ...prev };
        delete newReactions[reactionKey];
        return newReactions;
      });
      
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId 
            ? { ...comment, [type]: comment[type] - 1 } 
            : comment
        )
      );
    } else {
      // Add new reaction
      setUserReactions(prev => ({ ...prev, [reactionKey]: type }));
      
      // If user had opposite reaction, remove it
      if (userReactions[reactionKey]) {
        const oppositeType = type === 'likes' ? 'dislikes' : 'likes';
        setComments(prevComments => 
          prevComments.map(comment => 
            comment.id === commentId 
              ? { ...comment, [oppositeType]: comment[oppositeType] - 1 } 
              : comment
          )
        );
      }
      
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId 
            ? { ...comment, [type]: comment[type] + 1 } 
            : comment
        )
      );
    }
  };

  const handleReplyReaction = (commentId, replyId, type) => {
    // Check if user has already reacted
    const reactionKey = `reply_${replyId}`;
    if (userReactions[reactionKey] === type) {
      // Remove reaction
      setUserReactions(prev => {
        const newReactions = { ...prev };
        delete newReactions[reactionKey];
        return newReactions;
      });
      
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId 
            ? { 
                ...comment, 
                replies: comment.replies.map(reply => 
                  reply.id === replyId 
                    ? { ...reply, [type]: reply[type] - 1 } 
                    : reply
                ) 
              } 
            : comment
        )
      );
    } else {
      // Add new reaction
      setUserReactions(prev => ({ ...prev, [reactionKey]: type }));
      
      // If user had opposite reaction, remove it
      if (userReactions[reactionKey]) {
        const oppositeType = type === 'likes' ? 'dislikes' : 'likes';
        setComments(prevComments => 
          prevComments.map(comment => 
            comment.id === commentId 
              ? { 
                  ...comment, 
                  replies: comment.replies.map(reply => 
                    reply.id === replyId 
                      ? { ...reply, [oppositeType]: reply[oppositeType] - 1 } 
                      : reply
                  ) 
                } 
              : comment
          )
        );
      }
      
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId 
            ? { 
                ...comment, 
                replies: comment.replies.map(reply => 
                  reply.id === replyId 
                    ? { ...reply, [type]: reply[type] + 1 } 
                    : reply
                ) 
              } 
            : comment
        )
      );
    }
  };

  const handleDelete = (commentId) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
    }
  };

  const handleDeleteReply = (commentId, replyId) => {
    if (window.confirm('Are you sure you want to delete this reply?')) {
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId 
            ? { ...comment, replies: comment.replies.filter(reply => reply.id !== replyId) } 
            : comment
        )
      );
    }
  };

  const toggleReplyForm = (commentId) => {
    setActiveComment(commentId);
    setShowReplyForm(prev => ({ ...prev, [commentId]: !prev[commentId] }));
  };

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Comments</h2>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
        >
          {showForm ? 'Cancel' : 'Add Comment'}
        </button>
      </div>

      {/* Comment Form */}
      {showForm && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={newComment}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Comment'}
            </button>
          </form>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No comments yet. Be the first to comment!
          </div>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${activeComment === comment.id ? 'ring-2 ring-primary' : ''}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">{comment.author}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{comment.date}</p>
                </div>
                <button 
                  onClick={() => handleDelete(comment.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Delete comment"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{comment.text}</p>
              <div className="flex items-center space-x-4 mb-4">
                <button 
                  onClick={() => handleReaction(comment.id, 'likes')}
                  className={`flex items-center space-x-1 ${
                    userReactions[`comment_${comment.id}`] === 'likes' 
                      ? 'text-green-500' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>{comment.likes}</span>
                </button>
                <button 
                  onClick={() => handleReaction(comment.id, 'dislikes')}
                  className={`flex items-center space-x-1 ${
                    userReactions[`comment_${comment.id}`] === 'dislikes' 
                      ? 'text-red-500' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2.5" />
                  </svg>
                  <span>{comment.dislikes}</span>
                </button>
                <button 
                  onClick={() => toggleReplyForm(comment.id)}
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Reply
                </button>
              </div>

              {/* Reply Form */}
              {showReplyForm[comment.id] && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <form onSubmit={(e) => { e.preventDefault(); handleReply(comment.id); }}>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="replyAuthor"
                        value={replyAuthor[comment.id] || ''}
                        onChange={(e) => handleReplyChange(comment.id, e)}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-600 dark:text-white"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="replyText"
                        value={replyText[comment.id] || ''}
                        onChange={(e) => handleReplyChange(comment.id, e)}
                        placeholder="Your Reply"
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-600 dark:text-white"
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={() => toggleReplyForm(comment.id)}
                        className="px-3 py-1 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
                      >
                        Submit Reply
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-8 mt-4 space-y-4 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-800 dark:text-white">{reply.author}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{reply.date}</p>
                        </div>
                        <button 
                          onClick={() => handleDeleteReply(comment.id, reply.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          aria-label="Delete reply"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">{reply.text}</p>
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => handleReplyReaction(comment.id, reply.id, 'likes')}
                          className={`flex items-center space-x-1 ${
                            userReactions[`reply_${reply.id}`] === 'likes' 
                              ? 'text-green-500' 
                              : 'text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500'
                          }`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span className="text-sm">{reply.likes}</span>
                        </button>
                        <button 
                          onClick={() => handleReplyReaction(comment.id, reply.id, 'dislikes')}
                          className={`flex items-center space-x-1 ${
                            userReactions[`reply_${reply.id}`] === 'dislikes' 
                              ? 'text-red-500' 
                              : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500'
                          }`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2.5" />
                          </svg>
                          <span className="text-sm">{reply.dislikes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Comments; 