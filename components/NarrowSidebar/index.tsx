function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function NarrowSidebar(props: any) {
  const { navigationItems } = props;
  return (
    <>
      <nav
        aria-label="Sidebar"
        className="lg:flex-shrink-0 lg:overflow-y-auto lg:bg-gray-800"
      >
        <div className="relative flex w-20 flex-col space-y-3 p-3">
          {navigationItems.map((item: any) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-400 hover:bg-gray-700",
                "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
              )}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
