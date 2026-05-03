export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Education Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Exactly Where Students{" "}
          <span className="text-[#58a6ff]">Drop Out</span> of Your Course
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your student progress data and instantly see which lessons are killing your completion rates — with AI-powered suggestions to fix them.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $10/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Dropout Heatmaps</h3>
            <p className="text-sm text-[#8b949e]">Visual lesson-by-lesson breakdown of where students stop engaging.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📁</div>
            <h3 className="font-semibold text-white mb-1">CSV & API Ingestion</h3>
            <p className="text-sm text-[#8b949e]">Upload a CSV or connect your platform via API in minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💡</div>
            <h3 className="font-semibold text-white mb-1">Actionable Fixes</h3>
            <p className="text-sm text-[#8b949e]">Get specific content improvement suggestions for each bottleneck.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$10</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited course analyses</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CSV upload &amp; API access</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Dropout heatmaps &amp; reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI content improvement tips</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email support</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What data do I need to get started?</h3>
            <p className="text-sm text-[#8b949e]">Just a CSV with student IDs, lesson IDs, and completion timestamps. We also support direct API integrations with Teachable, Thinkific, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate is the dropout detection?</h3>
            <p className="text-sm text-[#8b949e]">Our algorithm analyzes completion rates, time-on-lesson, and re-watch patterns to identify true dropout points vs. natural pauses with high precision.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Course Completion Bottleneck Finder. All rights reserved.
      </footer>
    </main>
  );
}
