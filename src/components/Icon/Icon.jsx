import {
  ArrowToRightSvg,
  FilterSvg,
  BriefcaseSvg,
  HideSvg,
  LocationSvg,
  LogoSvg,
  ExperienceSvg,
} from './Svg';

const svgComponents = {
  arrowToRight: ArrowToRightSvg,
  filter: FilterSvg,
  briefcase: BriefcaseSvg,
  hide: HideSvg,
  location: LocationSvg,
  experience: ExperienceSvg,
  logo: LogoSvg,
};

const Icon = ({ name, ...props }) => {
  const SvgComponent = svgComponents[name] || <svg></svg>;
  return <SvgComponent {...props} />;
};

export default Icon;
