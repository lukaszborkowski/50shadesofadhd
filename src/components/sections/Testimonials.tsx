import { blackColor, primaryColor } from "./Hero";

export const Testimonials = () => {
  const reviews = [
    {
      name: "John",
      stars: 5,
      text: "Short and to the point. Helped me think about things I‘ve been feeling for years.",
    },
    {
      name: "Anna",
      stars: 4,
      text: "Although this is just a quick test, it sheds light on certain behaviors. I‘ve always considered it as just ’my way of being.’ It‘s worth taking a few minutes for introspection!",
    },
    {
      name: "Robert",
      stars: 5,
      text: "I took the test out of curiosity. It‘s simple but informative. If you are genuinely concerned about ADHD, definitely consult a doctor.",
    },
    {
      name: "Emily",
      stars: 4,
      text: "The test is straightforward, and it gave me a new perspective on my daily habits. It’s a good first step if you’re curious about ADHD.",
    },
    {
      name: "Michael",
      stars: 5,
      text: "A quick and easy test that made me realize I should pay more attention to certain patterns in my life. Highly recommend it!",
    },
    {
      name: "Sophia",
      stars: 3,
      text: "It’s helpful, but I would prefer more detailed questions. Still, it makes you reflect on things you might not have noticed before.",
    }
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
          4,100,000+ tests taken so far
        </h3>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="mb-8 sm:break-inside-avoid"
              style={{
                background: blackColor,
                color: primaryColor,
              }}
            >
              <blockquote
                className="rounded-lg  p-6  sm:p-8 "
                style={{
                  border: `2px solid`,
                  borderColor: primaryColor,
                  // background: blackColor,
                  // color: primaryColor,
                }}
              >
                <div className="flex  gap-4">
                  <div>
                    <div
                      className="flex justify-center gap-1 "
                      style={{
                        color: primaryColor,
                      }}
                    >
                      {[...Array(review.stars)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          width="20"
                          height="20"
                          viewBox="0 0 96 96"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M96 0H0V96H96V0Z" fill={primaryColor} />
                          <path
                            d="M47.9999 64.6999L62.5999 61L68.6999 79.8L47.9999 64.6999ZM81.5999 40.4H55.8999L47.9999 16.2L40.0999 40.4H14.3999L35.1999 55.4L27.2999 79.5999L48.0999 64.5999L60.8999 55.4L81.5999 40.4Z"
                            fill={blackColor}
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-0.5 text-lg text-start font-bold text-white">{review.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-start ">{review.text}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
