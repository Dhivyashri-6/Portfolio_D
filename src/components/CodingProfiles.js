import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiLeetcode, 
  SiCodeforces,
  SiGithub
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const CodingProfiles = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'LeetCode',
      username: 'Dhivyashri-IT',
      icon: SiLeetcode,
      color: '#FFA116',
      url: 'https://leetcode.com/u/Dhivyashri-IT/',
      type: 'leetcode',
      stats: { total: 0, easy: 0, medium: 0, hard: 0 },
      loading: true
    },
    {
      id: 2,
      name: 'Codeforces',
      username: 'Dhivyashri',
      icon: SiCodeforces,
      color: '#1F8ACB',
      url: 'https://codeforces.com/profile/Dhivyashri',
      type: 'codeforces',
      stats: { rating: 0, maxRating: 0, solved: 0, submissions: 0 },
      loading: true
    },
    {
      id: 3,
      name: 'GitHub',
      username: 'Dhivyashri-6',
      icon: SiGithub,
      color: '#ffffff',
      url: 'https://github.com/Dhivyashri-6',
      type: 'github',
      stats: { rating: 0, maxRating: 0, solved: 0, submissions: 0 },
      loading: true
    }
  ]);

  useEffect(() => {
    const fetchLeetCode = async (profile) => {
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${profile.username}`);
        const data = await res.json();
        if (data.status === 'success') {
          return {
            ...profile,
            stats: {
              total: data.totalSolved || 0,
              easy: data.easySolved || 0,
              medium: data.mediumSolved || 0,
              hard: data.hardSolved || 0
            },
            loading: false
          };
        }
      } catch (e) {
        console.error('LeetCode API error', e);
      }
      return { ...profile, loading: false };
    };

    const fetchCodeforces = async (profile) => {
      try {
        const infoRes = await fetch(`https://codeforces.com/api/user.info?handles=${profile.username}`);
        const info = await infoRes.json();
        const statusRes = await fetch(`https://codeforces.com/api/user.status?handle=${profile.username}`);
        const status = await statusRes.json();

        let solved = 0;
        let submissions = 0;
        if (status.status === 'OK' && status.result) {
          submissions = status.result.length;
          const solvedSet = new Set();
          status.result.forEach((s) => {
            if (s.verdict === 'OK') {
              solvedSet.add(`${s.problem.contestId}-${s.problem.index}`);
            }
          });
          solved = solvedSet.size;
        }

        if (info.status === 'OK' && info.result.length > 0) {
          const user = info.result[0];
          return {
            ...profile,
            stats: {
              rating: user.rating || 0,
              maxRating: user.maxRating || 0,
              solved,
              submissions
            },
            loading: false
          };
        }
      } catch (e) {
        console.error('Codeforces API error', e);
      }
      return { ...profile, loading: false };
    };

    const fetchGithub = async (profile) => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${profile.username}`);
        const userData = await userRes.json();
        
        // Fetch contributions using a public API
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${profile.username}`);
        const contribData = await contribRes.json();
        
        if (userData.login) {
          const currentYear = new Date().getFullYear();
          const currentYearContrib = contribData.total?.[currentYear] || 0;
          const totalContrib = Object.values(contribData.total || {}).reduce((a, b) => a + b, 0);

          return {
            ...profile,
            stats: {
              rating: userData.public_repos || 0,
              maxRating: userData.followers || 0,
              solved: currentYearContrib,
              submissions: totalContrib
            },
            loading: false
          };
        }
      } catch (e) {
        console.error('GitHub API error', e);
      }
      return { ...profile, loading: false };
    };

    const load = async () => {
      const updated = await Promise.all(
        profiles.map((p) => {
          if (p.type === 'leetcode') return fetchLeetCode(p);
          if (p.type === 'codeforces') return fetchCodeforces(p);
          if (p.type === 'github') return fetchGithub(p);
          return p;
        })
      );
      setProfiles(updated);
    };

    load();
  }, []);

  const getStatLabels = (type) => {
    switch (type) {
      case 'github':
        return { rating: 'Repos', maxRating: 'Followers', solved: '2025 Commits', submissions: 'Total Commits' };
      default:
        return { rating: 'Rating', maxRating: 'Max Rating', solved: 'Solved', submissions: 'Submissions' };
    }
  };

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
          {profiles.map((profile, index) => {
            const labels = getStatLabels(profile.type);
            return (
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
                          <span className="text-xl font-bold text-white">
                            {profile.loading ? '...' : profile.stats.total}
                          </span>
                          <span className="text-[10px] text-zinc-500">Solved</span>
                        </div>
                      </div>
                      
                      {/* Stats List */}
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-400">Easy</span>
                          <span className="text-white font-mono">
                            {profile.loading ? '...' : profile.stats.easy}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: profile.stats.total > 0 ? `${(profile.stats.easy / profile.stats.total) * 100}%` : '0%' }} />
                        </div>
                        
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-400">Medium</span>
                          <span className="text-white font-mono">
                            {profile.loading ? '...' : profile.stats.medium}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: profile.stats.total > 0 ? `${(profile.stats.medium / profile.stats.total) * 100}%` : '0%' }} />
                        </div>

                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-400">Hard</span>
                          <span className="text-white font-mono">
                            {profile.loading ? '...' : profile.stats.hard}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: profile.stats.total > 0 ? `${(profile.stats.hard / profile.stats.total) * 100}%` : '0%' }} />
                        </div>
                      </div>
                    </div>
                  ) : profile.type === 'github' ? (
                    <div className="flex flex-col justify-between h-full min-h-[100px]">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-xs text-zinc-400 block mb-1">2025 Contributions</span>
                          <span className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                            {profile.loading ? '...' : profile.stats.solved}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-zinc-400 block mb-1">Total</span>
                          <span className="text-xl font-mono text-zinc-300">
                            {profile.loading ? '...' : profile.stats.submissions}
                          </span>
                        </div>
                      </div>
                      
                      {/* Activity Graph Visual */}
                      <div className="flex gap-1 h-12 items-end opacity-80">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: '20%' }}
                            animate={{ height: ['20%', `${30 + (i % 5) * 15 + Math.random() * 20}%`, '20%'] }}
                            transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                            className="flex-1 rounded-sm"
                            style={{ 
                              backgroundColor: profile.color,
                              opacity: 0.3 + (i / 12) * 0.7
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                        <span className="block text-xs text-zinc-500 mb-1">{labels.rating}</span>
                        <span className="text-lg font-bold text-white">
                          {profile.loading ? '...' : profile.stats.rating}
                        </span>
                      </div>
                      <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                        <span className="block text-xs text-zinc-500 mb-1">{labels.maxRating}</span>
                        <span className="text-lg font-bold text-white">
                          {profile.loading ? '...' : profile.stats.maxRating}
                        </span>
                      </div>
                      <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                        <span className="block text-xs text-zinc-500 mb-1">{labels.solved}</span>
                        <span className="text-lg font-bold text-white">
                          {profile.loading ? '...' : profile.stats.solved}
                        </span>
                      </div>
                      <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                        <span className="block text-xs text-zinc-500 mb-1">{labels.submissions}</span>
                        <span className="text-lg font-bold text-white">
                          {profile.loading ? '...' : profile.stats.submissions}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
