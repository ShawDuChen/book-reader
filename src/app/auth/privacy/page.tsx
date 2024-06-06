export default function PrivacyPage() {
  return (
    <section className="gradient-container">
      <section className="container p-12 space-y-8">
        <h1 className="text-2xl font-bold">
          {process.env.NEXT_WEBSIATE_TITLE}
        </h1>
        <h2 className="text-xl font-semibold">用户协议</h2>
        <h2 className="text-xl font-semibold">隐私政策</h2>
        <h2 className="text-xl font-semibold">法律规范</h2>
      </section>
    </section>
  );
}
