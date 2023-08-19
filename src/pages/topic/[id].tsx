import { DashboardLayout, ListChapters } from "@/components";
import { Chip } from "@nextui-org/react";

const {
  module: { name: moduleName },
  topic,
  paragraphs,
  goal,
  source,
} = {
  module: {
    name: "Module 1",
  },
  topic: "Technical Specifications",
  paragraphs: [
    {
      description:
        "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
      sentence: "I'm a player",
    },
    {
      description:
        "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
    },
  ],
  goal: "Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you meticulously arrange items into dedicated trays.",
  source:
    "https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg",
};

const TopicPage = () => {
  return (
    <DashboardLayout content="full">
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            src={source}
            alt=""
            className="h-[300px] w-full object-cover object-center lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h1 className="mb-4 text-base font-bold tracking-tight text-indigo-600 sm:text-lg">
              {moduleName}
            </h1>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {topic}
            </h2>
            <p className="mt-4 text-gray-500">{goal}</p>
          </div>

          <p className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            {paragraphs.map(({ description, sentence }, i) => (
              <>
                <p key={i} className="mt-8 mb-4 text-lg text-slate-600">
                  {description}
                </p>
                {sentence && (
                  <Chip
                    color="default"
                    size="lg"
                    radius="md"
                    variant="bordered"
                  >
                    {sentence}
                  </Chip>
                )}
              </>
            ))}
          </p>
          <ListChapters />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TopicPage;
