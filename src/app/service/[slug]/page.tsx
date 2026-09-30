import { ServiceRegistry } from "@/component/servicetemplates/serviceregistry";

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const SelectedService = ServiceRegistry[slug];

  if (!SelectedService) {
    return <div className=" w-full min-h-screen flex justify-center items-center">
        <p className="text-6xl text-center">Service Not Found</p>
    </div>;
  }

  return <SelectedService />;
}
