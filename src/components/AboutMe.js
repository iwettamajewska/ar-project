const dietetician = {
  name: "Anna Redler",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const AboutMe = () => {
  return (
    <section id="about-us" class="about-us-container">
      <div class="container-experts container">
        <h3 class="main-text-experts">Anna Redler</h3>
        <div class="container-of-circles-and-experts">
          <div class="about-experts">
            <div class="first-circle circle"></div>
            <div class="first-expert expert">
              <p class="name-expert">dietetyk, psychodietetyk</p>
              <p class="lorem-expert">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
