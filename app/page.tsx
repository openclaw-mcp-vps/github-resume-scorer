export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Technical Recruiters &amp; Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Score Developer Resumes Against{" "}
          <span className="text-[#58a6ff]">Real GitHub Activity</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop trusting inflated resumes. Instantly analyze a candidate&apos;s GitHub profile,
          verify their claimed skills, and get a scored report — before the first interview.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Scoring for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Commit history analysis",
            "Language verification",
            "Contribution quality score",
            "Resume vs. reality report",
            "Instant PDF export"
          ].map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to hire smarter</p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited candidate analyses",
              "GitHub OAuth profile scanning",
              "Skill & language verification",
              "Scored PDF reports",
              "Commit quality metrics",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#3fb950] font-bold">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#238636] hover:bg-[#2ea043] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the GitHub analysis work?</h3>
            <p className="text-[#8b949e] text-sm">
              You enter a candidate&apos;s GitHub username. We fetch their public repositories, commit history,
              and language usage via the GitHub API, then compare the data against the skills listed on their resume
              to generate a scored report.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Do candidates need to authorize anything?</h3>
            <p className="text-[#8b949e] text-sm">
              No. We only analyze public GitHub profiles and repositories. No candidate action is required,
              making it seamless to screen applicants at scale.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">
              Yes. You can cancel at any time from your billing dashboard with no penalties or hidden fees.
              Your access continues until the end of the current billing period.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} GitHub Resume Scorer. All rights reserved.
      </footer>
    </main>
  );
}
