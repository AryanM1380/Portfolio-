"use client";

// import { useState, useEffect } from 'react';

const Community = () => {
  // const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState({ author: '', content: '' });
  // const [newReply, setNewReply] = useState({ name: '', content: '', commentId: null });

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       const response = await fetch('/data/projectComments.json');
  //       const data = await response.json();
  //       setComments(data.comments);
  //     } catch (error) {
  //       console.error('Error fetching comments:', error);
  //     }
  //   };

  //   fetchComments();
  // }, []);

  // const handleCommentSubmit = async () => {
  //   if (!newComment.author || !newComment.content) return;

  //   const comment = {
  //     id: Date.now(),
  //     author: newComment.author,
  //     content: newComment.content,
  //     date: new Date().toISOString().split('T')[0],
  //     replies: []
  //   };

  //   try {
  //     const response = await fetch('/api/comments', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ comment }),
  //     });

  //     if (response.ok) {
  //       setComments(prev => [...prev, comment]);
  //       setNewComment({ author: '', content: '' });
  //     }
  //   } catch (error) {
  //     console.error('Error saving comment:', error);
  //   }
  // };

  // const handleReplySubmit = async (commentId) => {
  //   if (!newReply.name || !newReply.content) return;

  //   const reply = {
  //     id: Date.now(),
  //     name: newReply.name,
  //     content: newReply.content,
  //     date: new Date().toISOString().split('T')[0]
  //   };

  //   try {
  //     const response = await fetch('/api/replies', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         commentId,
  //         reply
  //       }),
  //     });

  //     if (response.ok) {
  //       setComments(prev => prev.map(comment => 
  //         comment.id === commentId 
  //           ? { ...comment, replies: [...comment.replies, reply] }
  //           : comment
  //       ));
  //       setNewReply({ name: '', content: '', commentId: null });
  //     }
  //   } catch (error) {
  //     console.error('Error saving reply:', error);
  //   }
  // };

  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Community
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Coming Soon!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our community features are currently under development. Stay tuned for updates!
            </p>
          </div>
        </div>

        {/* Commented out original code
        <div className="max-w-2xl mx-auto mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Share Your Thoughts</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={newComment.author}
              onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Write your comment..."
              value={newComment.content}
              onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              rows="3"
            />
            <button
              onClick={handleCommentSubmit}
              className="w-full px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Post Comment
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-gray-800 dark:text-white">{comment.author}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(comment.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{comment.content}</p>

              {comment.replies?.map((reply) => (
                <div key={reply.id} className="ml-8 mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-800 dark:text-white">{reply.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(reply.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{reply.content}</p>
                </div>
              ))}

              {newReply.commentId === comment.id ? (
                <div className="ml-8 mt-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={newReply.name}
                    onChange={(e) => setNewReply(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full mb-2 px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Write a reply..."
                    value={newReply.content}
                    onChange={(e) => setNewReply(prev => ({ ...prev, content: e.target.value }))}
                    className="w-full mb-2 px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="2"
                  />
                  <button
                    onClick={() => handleReplySubmit(comment.id)}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Post Reply
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setNewReply({ name: '', content: '', commentId: comment.id })}
                  className="ml-8 mt-2 text-sm text-primary hover:text-primary/80"
                >
                  Reply
                </button>
              )}
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default Community; 