import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GitHubCalendar } from 'react-github-calendar';
import { Github, Users, BookOpen, UserPlus, Activity, ExternalLink, Folder } from 'lucide-react';

interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  total_contributions: string;
}

export const GithubActivity = () => {
  const [stats, setStats] = useState<GitHubStats>({
    followers: 0,
    following: 0,
    public_repos: 0,
    total_contributions: '1,000+', // fallback or placeholder, since we can't easily get total contributions directly from user api
  });
  
  const username = "The-Pavan-Yadav";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data && !data.message) {
          setStats(prev => ({
            ...prev,
            followers: data.followers || 0,
            following: data.following || 0,
            public_repos: data.public_repos || 0,
          }));
        }
      })
      .catch(err => console.error("Error fetching GitHub stats", err));
  }, []);

  const statCards = [
    {
      title: "Total Contributions",
      value: stats.total_contributions,
      icon: Activity,
    },
    {
      title: "Public Repositories",
      value: stats.public_repos,
      icon: BookOpen,
    },
    {
      title: "Projects",
      value: 6,
      icon: Folder,
    },
    {
      title: "Following",
      value: stats.following,
      icon: UserPlus,
    }
  ];

  return (
    <section className="py-12 md:py-32 relative w-[90%] md:w-full mx-auto">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 md:mb-24 w-full"
        >
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <span className="text-[#64748B] font-mono text-xs md:text-sm font-semibold tracking-wider uppercase">
              Open Source
            </span>
            <div className="h-[1px] bg-[#1F1F1F] w-24 md:w-64"></div>
          </div>
          <div className="relative inline-block mb-2 md:mb-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight flex flex-wrap items-center gap-2 md:gap-3 select-none">
              <span className="text-[#F8FAFC]">GitHub</span>
              <span className="text-[#64748B]">Activity</span>
            </h2>
          </div>
          <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed max-w-2xl">
            Building, learning, and contributing every day.
          </p>
        </motion.div>

        {/* Heatmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-5xl bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl md:rounded-2xl p-4 sm:p-8 md:p-10 mb-6 md:mb-8 shadow-[0_4px_16px_rgba(0,0,0,0.3)] md:shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
            <Github className="w-5 h-5 md:w-6 md:h-6 text-[#F8FAFC]" />
            <h3 className="text-lg md:text-xl font-bold text-[#F8FAFC]">Contributions</h3>
          </div>
          <div className="w-full overflow-x-auto pb-4 scrollbar-hide flex justify-start md:justify-center">
            <div className="min-w-[750px]">
              <GitHubCalendar 
                username={username} 
                colorScheme="dark"
                theme={{
                  dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                blockRadius={2}
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-4 gap-1.5 md:gap-4 w-full max-w-5xl mb-8 md:mb-16"
        >
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            return (
                <div 
                  key={stat.title}
                  className="group relative bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#333333] rounded-lg md:rounded-xl p-1.5 md:p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)] md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.45)] flex flex-col items-center text-center gap-1 md:gap-3"
                >
                  <div className="w-5 h-5 md:w-8 md:h-8 rounded md:rounded-lg bg-[#050505] border border-[#1A1A1A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#64748B] group-hover:text-[#F8FAFC] transition-colors" />
                  </div>
                  <div className="w-full">
                    <div className="text-[11px] md:text-lg font-bold text-[#F8FAFC] mb-0.5">{stat.value}</div>
                    <div className="text-[6px] sm:text-[7px] md:text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider break-words">{stat.title}</div>
                  </div>
                </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
