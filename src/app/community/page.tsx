"use client";

import Comments from '../components/Comments';
import { useState } from 'react';

export default function CommunityPage() {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinCommunity = () => {
    setIsJoined(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Community
        </h1>

        {!isJoined ? (
          <>
            {/* Community Guidelines */}
            <div className="max-w-4xl mx-auto mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Community Guidelines</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Welcome to our community! To ensure a positive experience for everyone, please follow these guidelines:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Be respectful and kind to other members</li>
                <li>Keep discussions relevant and constructive</li>
                <li>Use appropriate language and avoid offensive content</li>
                <li>Share your knowledge and experiences</li>
                <li>Report any inappropriate behavior</li>
              </ul>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                By participating in our community, you agree to follow these guidelines. We reserve the right to remove any content that violates these rules.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={handleJoinCommunity}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Join Community
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Comments Section */}
            <div className="max-w-4xl mx-auto">
              <Comments />
            </div>
          </>
        )}
      </div>
    </main>
  );
} 