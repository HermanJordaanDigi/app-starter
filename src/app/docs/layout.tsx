import { DocsSidebar } from "@/components/docs/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DocsSidebar />
      <main className="flex-1 overflow-y-auto flex justify-center">
        <div className="w-full max-w-4xl px-4 py-10">{children}</div>
      </main>
    </div>
  );
}
