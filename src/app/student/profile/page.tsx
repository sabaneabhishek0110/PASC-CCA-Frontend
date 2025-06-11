"use client";

import { User, BadgeCheck, Clock, Star, BookOpen } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="bg-background p-2 md:p-6 text-primary">
      <div className="mx-auto max-w-6xl flex flex-col gap-6" style={{ height: "calc(100vh - 80px)", overflowY: "auto" }}>
        {/* Top: Profile Card + Stat Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Profile Card */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="bg-card rounded-xl shadow-sm p-6 flex flex-col items-center gap-4 border border-card h-full">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-[var(--color-profile)] flex items-center justify-center">
                  <User className="w-10 h-10 text-[var(--color-text-muted)]" />
                </div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-muted">johndoe123@gmail.com</p>
              </div>
              <div className="w-full mt-4 flex flex-col gap-2 text-sm text-secondary">
                <div className="flex justify-between"><span>Department :</span><span>CE</span></div>
                <div className="flex justify-between"><span>Pass out Year :</span><span>2026</span></div>
                <div className="flex justify-between"><span>Roll No :</span><span>31103</span></div>
                <div className="flex justify-between"><span>Year :</span><span>3rd Year</span></div>
              </div>
            </div>
          </div>
          {/* Stat Cards */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {/* Tabs */}
            <div className="bg-card rounded-xl shadow-sm p-2 flex gap-2 border border-card mb-2">
              <button className="flex-1 py-2 rounded-lg font-semibold bg-[var(--color-profile)] text-primary">Dashboard</button>
              <button className="flex-1 py-2 rounded-lg font-semibold text-secondary">My Events</button>
            </div>
            {/* Stats Grid: 2x2 on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4 flex flex-col gap-2 border border-card">
                <div className="flex items-center gap-2 text-secondary">
                  <BadgeCheck className="w-5 h-5 text-green-600" /> Events Attended
                </div>
                <div className="text-3xl font-bold text-green-600">12</div>
                <div className="text-xs text-secondary">out of 15 Events</div>
              </div>
              <div className="bg-card rounded-xl p-4 flex flex-col gap-2 border border-card">
                <div className="flex items-center gap-2 text-secondary">
                  <Clock className="w-5 h-5 text-blue-600" /> Credit Hours
                </div>
                <div className="text-3xl font-bold text-blue-600">20</div>
                <div className="text-xs text-secondary">10 hours to goal</div>
              </div>
              <div className="bg-card rounded-xl p-4 flex flex-col gap-2 border border-card">
                <div className="flex items-center gap-2 text-secondary">
                  <Star className="w-5 h-5 text-yellow-500" /> Personal Best
                </div>
                <div className="text-3xl font-bold text-yellow-500">10</div>
                <div className="text-xs text-secondary">hrs earned at Web Dev SIG</div>
              </div>
              <div className="bg-card rounded-xl p-4 flex flex-col gap-2 border border-card">
                <div className="flex items-center gap-2 text-secondary">
                  <BookOpen className="w-5 h-5 text-orange-500" /> Completion Rate
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-full h-2 bg-[var(--color-button-disabled)] rounded-full overflow-hidden">
                    <div className="h-2 bg-orange-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-lg font-semibold text-orange-500">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom: Recent Activity (full width) */}
        <div className="bg-card rounded-xl p-4 border border-card">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between bg-[var(--color-profile)] rounded-lg p-3">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-6 h-6 text-green-600" />
                <span className="font-medium">Web Dev SIG</span>
              </div>
              <span className="text-secondary text-sm">2/7/25 - 4h</span>
            </li>
            <li className="flex items-center justify-between bg-[var(--color-profile)] rounded-lg p-3">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-6 h-6 text-green-600" />
                <span className="font-medium">ML Bootcamp</span>
              </div>
              <span className="text-secondary text-sm">8/7/25 - 6h</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}