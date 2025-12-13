export default function MemberProfileSection({ text }: { text?: string }) {
    if (!text) return null;
  
    return (
      <section className="rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-6">
        <div className="mb-3">
          <p className="text-sm font-semibold text-gray-600">Profile</p>
          <h2 className="text-2xl font-bold">プロフィール</h2>
        </div>
        <p className="leading-7 text-gray-800">{text}</p>
      </section>
    );
  }