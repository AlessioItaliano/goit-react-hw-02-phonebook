import PropTypes from 'prop-types';
import { SectionModule, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionModule>
      <Title>{title} </Title>
      {children}
    </SectionModule>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
