import ScrollOpacity from '@/common/components/ScrollOpacity';

import Project from './Project';

const ProjectsList = () => {
  return (
    <section
      className="mt-36 flex w-screen justify-center md:mt-0"
      id="projects"
    >
      <ScrollOpacity>
        <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          <Project
            title="The Octopus"
            description="Octopus is a new platform that connects service providers, solopreneurs, brands, and consumers. It is the first of its kind in the area."
            // github="https://github.com/sheikhmubashi"
            demo="https://play.google.com/store/apps/details?id=com.octopusmarket.app"
            scrollTo
          />
          <Project
            title="Skill Development Council"
            description="The 'Skill Development Council' project is a web app for managing students, teachers, and course certifications, built with Next.js and React Query."
            // github="https://github.com/sheikhmubashi"
            demo="https://sdc-dashboard.vercel.app/"
            scrollTo
          />
          <Project
            title="Decotechs/Software House"
            description="Explore the website I developed for my employer's software house, crafted with React and Ant Design – a showcase of digital solutions from our innovative team."
            github="https://github.com/sheikhmubashi/decotechs"
            demo="https://decotechs.com/"
            scrollTo
          />
          <Project
            title="Trackkrr/EMS"
            description="Trackarr: An employee management system, meticulously developed with React and Material-UI for seamless workforce management."
            // github="https://github.com/sheikhmubashi/edrella"
            demo="https://trackkrr.com"
          />
          <Project
            title="Anos/Ecommerce"
            description="Anos: An e-commerce website designed and developed by me using Next.js and Material-UI for an exceptional online shopping experience."
            github="https://github.com/sheikhmubashi/anos-collection"
            demo="http://anos.pk/"
          />
          <Project
            title="broskees/NFT"
            description="I have developed this website for our esteemed clientele, dedicated to facilitating NFT sales and purchases"
            github="https://github.com/sheikhmubashi/broskees"
            demo="https://www.broskees.io/"
          />
          <Project
            title="Hanker"
            description="Hanker is a product that shapes customer data to drive actions in ad tech. I've worked on Hanker's frontend, implementing APIs and designing dashboards with charts and graphs."
            // github="https://github.com/sheikhmubashi/broskees"
            demo="https://hanker.com.pk/"
          />
          {/* <Project
            title="Edrella/LMS"
            description="Edrella: A powerful learning management system inspired by Google Classroom and Facebook. Crafted with React, Material-UI, and React Query for an exceptional educational experience."
            github="https://github.com/sheikhmubashi/edrella"
            demo="https://edrella-b5659.web.app"
          /> */}
          <Project
            title="Float Boat"
            description="This is a website dedicated to rating boat services, meticulously crafted with React and Material-UI."
            github="https://github.com/sheikhmubashi/floatBoat"
            demo="http://average-rail.surge.sh/"
          />
          <Project
            title="ukSite/Ecommerce"
            description="This is a UK-based e-commerce platform, meticulously crafted with React"
            github="https://github.com/sheikhmubashi/ukSItes"
          />
          <Project
            title="Profile Wear/Ecommerce"
            description="Profile Wear: Your destination for men's and women's clothing."
            github="https://github.com/sheikhmubashi/profileWear"
            demo="steady-end.surge.sh"
          />
        </div>

        <p className="mt-10 px-10 text-center text-2xl">
          For more projects checkout my{' '}
          <a
            className="text-gradient hover:hover-gradient"
            href="https://github.com/sheikhmubashi"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          .
        </p>
      </ScrollOpacity>
    </section>
  );
};

export default ProjectsList;
