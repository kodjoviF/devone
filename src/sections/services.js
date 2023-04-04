import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'we give you the opportunity to be visible and accessible online, where you can be found by people all over the world, 24 hours a day, 7 days a week..',
    heading: 'Web Site',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'We offer you a springboard to promote your business, products or services to a wider audience using online marketing tools',
    heading: 'Digital promotion',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Mobile applications can be an effective tool for marketing and customer engagement, using features such as push notifications, loyalty programs, satisfaction surveys, etc.',
    heading: 'mobile app',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'Websites and mobile applications must evolve to meet the needs of users, businesses and emerging technologies. ',
    heading: 'maintenance',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'office applications tailored to your business.',
    heading: 'Office applications',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'we create a visual and static design of a product, website, mobile application or other project, which allows you to see what the final product will look like before moving to the development phase..',
    heading: 'Design',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="What the features of product"
          text="learn more about our services"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
