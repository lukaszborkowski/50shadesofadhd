import { blackColor, primaryColor } from "./Hero";

export const Features = () => {
  const reviews = [
    {
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Reliable Questions",
      stars: 5,
      text: "Our questions correspond to those traditionally asked by general practitioners to their patients and are based on WHO guidelines.",
    },
    {
      img: "https://s3.us-west-002.backblazeb2.com/betterme/e4c9e4284cb59e1507604ff73c156597955b3c2bfecc17f78a6e81d0d2732383",
      name: "Immediate Results",
      stars: 4,
      text: "After taking our tests, unlock your results immediately and discover the likelihood that you suffer from ADHD.",
    },
    {
      img: "https://s3.us-west-002.backblazeb2.com/betterme/304f0a8389fefacc82a502375baa6b54346d7b6f4b5332634556d11dcd6fdb0a",
      name: "Privacy is Important",
      stars: 5,
      text: "Your answers and data are confidential.",
    },
  ];

  return (
    <section
      className=""
      style={{
        background: blackColor,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 py-12 lg:py-32">
        <h3
          className="text-2xl font-bold   sm:text-3xl xl:text-5xl "
          style={{
            color: "white",
          }}
        >
          Why taking our test?
        </h3>

        <div className="mt-8 ">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex w-full mb-8"
              style={{
                background: blackColor,
                color: primaryColor,
              }}
            >
              <blockquote
                className="rounded-lg p-6 sm:p-8 w-full flex flex-col justify-between"
                style={{
                  border: `2px solid`,
                  borderColor: primaryColor,
                }}
              >
                <div className="flex gap-4">
                  <div>
                    <p className="mt-0.5 text-lg text-start font-bold text-white">{review.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-start flex-grow">{review.text}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
