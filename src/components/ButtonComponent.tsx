import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
interface defineProps {
  title: string;
}
const ButtonComponent = ({ title }: defineProps) => (
  <Button type="submit" variant="primary">
    {title}
  </Button>
);
ButtonComponent.propTypes = {
  title: PropTypes.string
};
export default ButtonComponent;
