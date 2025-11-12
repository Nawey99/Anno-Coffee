export function Footer() {
  return (
    <footer className="border-t border-[#DEB887]/30 bg-white" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} ANNO Coffee. All rights reserved.
      </div>
    </footer>
  );
}
