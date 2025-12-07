import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiLeetcode, 
  SiGeeksforgeeks, 
  SiCodeforces
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const CodingProfiles = () => {
  const profiles = [
    {
      id: 1,
      name: 'LeetCode',
      username: 'Dhivyashri-IT',
      icon: SiLeetcode,
      color: '#FFA116',
      url: 'https://leetcode.com/u/Dhivyashri-IT/',
      type: 'leetcode',
      stats: {
        total: 237,
        easy: 173,
        medium: 56,
        hard: 8
      }
    },
    {
      id: 2,
      name: 'GeeksforGeeks',
      username: 'dhivyashrh8ds',
      icon: SiGeeksforgeeks,
      color: '#2F8D46',
      url: 'https://www.geeksforgeeks.org/profile/dhivyashrh8ds',
      type: 'leetcode', // Using same layout as LeetCode
      stats: {
        total: 10,
        easy: 0, // Not provided in screenshot, keeping 0
        medium: 0, // Not provided in screenshot, keeping 0
        hard: 0 // Not provided in screenshot, keeping 0
      }
    },
    {
      id: 3,
      name: 'Codeforces',
      username: 'Dhivyashri',
      icon: SiCodeforces,
      color: '#1F8ACB',
      url: 'https://codeforces.com/profile/Dhivyashri',
      type: 'codeforces',
      stats: {
        rating: 0,
        maxRating: 0,
        solved: 3,
        submissions: 8
      }
    }
  ];

  return (
    <div id="coding-profiles" className="relative overflow-hidden py-10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] -z-10" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Coding <span className="text-purple-500">Profiles</span>
          </h2>
          <div className="h-1 w-16 bg-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900 border-2 border-white/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <profile.icon className="text-2xl" style={{ color: profile.color }} />
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-zinc-400">@{profile.username}</p>
                    </div>
                  </div>
                  <FiExternalLink className="text-zinc-500 group-hover:text-white transition-colors text-sm" />
                </div>
                
                {/* Stats Display */}
                {profile.type === 'leetcode' ? (
                  <div className="flex items-center gap-4">
                    {/* Circle Chart */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="40" cy="40" r="36" stroke="#333" strokeWidth="6" fill="transparent" />
                        <circle cx="40" cy="40" r="36" stroke={profile.color} strokeWidth="6" fill="transparent" strokeDasharray={`${(profile.stats.total / (profile.name === 'LeetCode' ? 2000 : 100)) * 226} 226`} />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-white">{profile.stats.total}</span>
                        <span className="text-[10px] text-zinc-500">Solved</span>
                      </div>
                    </div>
                    
                    {/* Stats List */}
                    {profile.name === 'GeeksforGeeks' ? (
                       <div className="flex-1 space-y-2">
                         <div className="flex justify-between text-xs">
                           <span className="text-zinc-400">Coding Score</span>
                           <span className="text-white font-mono">20</span>
                         </div>
                         <div className="flex justify-between text-xs">
                           <span className="text-zinc-400">Institute Rank</span>
                           <span className="text-white font-mono">639</span>
                         </div>
                       </div>
                    ) : (
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-400">Easy</span>
                        <span className="text-white font-mono">{profile.stats.easy}</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: `${(profile.stats.easy / profile.stats.total) * 100}%` }} />
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-400">Medium</span>
                        <span className="text-white font-mono">{profile.stats.medium}</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: `${(profile.stats.medium / profile.stats.total) * 100}%` }} />
                      </div>

                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-400">Hard</span>
                        <span className="text-white font-mono">{profile.stats.hard}</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500" style={{ width: `${(profile.stats.hard / profile.stats.total) * 100}%` }} />
                      </div>
                    </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                      <span className="block text-xs text-zinc-500 mb-1">Rating</span>
                      <span className="text-lg font-bold text-white">{profile.stats.rating}</span>
                    </div>
                    <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                      <span className="block text-xs text-zinc-500 mb-1">Max Rating</span>
                      <span className="text-lg font-bold text-white">{profile.stats.maxRating}</span>
                    </div>
                    <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                      <span className="block text-xs text-zinc-500 mb-1">Solved</span>
                      <span className="text-lg font-bold text-white">{profile.stats.solved}</span>
                    </div>
                    <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                      <span className="block text-xs text-zinc-500 mb-1">Submissions</span>
                      <span className="text-lg font-bold text-white">{profile.stats.submissions}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
