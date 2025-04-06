"use client";

import { useState, useEffect } from 'react';
import Comments from './Comments';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [stats, setStats] = useState({
    totalComments: 0,
    totalLikes: 0,
    totalReplies: 0
  });

  useEffect(() => {
    // Load comments from localStorage to calculate stats
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    const totalComments = savedComments.length;
    const totalLikes = savedComments.reduce((sum, comment) => sum + (comment.likes || 0), 0);
    const totalReplies = savedComments.reduce((sum, comment) => sum + (comment.replies?.length || 0), 0);
    
    setStats({
      totalComments,
      totalLikes,
      totalReplies
    });
  }, []);

  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Community
        </h2>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.totalComments}</div>
            <div className="text-gray-600 dark:text-gray-300">Total Comments</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.totalLikes}</div>
            <div className="text-gray-600 dark:text-gray-300">Total Likes</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.totalReplies}</div>
            <div className="text-gray-600 dark:text-gray-300">Total Replies</div>
          </div>
        </div>

        {/* Community Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row mb-8 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-6 py-3 text-left transition-colors duration-300 ${
                activeTab === 'discussions'
                  ? "border-b-2 border-primary text-primary dark:text-primary"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              <div className="font-medium">Discussions</div>
              <div className="text-sm">Join the conversation</div>
            </button>
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`px-6 py-3 text-left transition-colors duration-300 ${
                activeTab === 'guidelines'
                  ? "border-b-2 border-primary text-primary dark:text-primary"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              <div className="font-medium">Community Guidelines</div>
              <div className="text-sm">Learn about our rules</div>
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            {activeTab === 'discussions' ? (
              <Comments />
            ) : (
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4">Community Guidelines</h3>
                <p className="mb-4">
                  Welcome to our community! To ensure a positive experience for everyone, please follow these guidelines:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Be respectful and kind to other members</li>
                  <li>Keep discussions relevant and constructive</li>
                  <li>Use appropriate language and avoid offensive content</li>
                  <li>Share your knowledge and experiences</li>
                  <li>Report any inappropriate behavior</li>
                </ul>
                <p>
                  By participating in our community, you agree to follow these guidelines. We reserve the right to remove any content that violates these rules.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community; 