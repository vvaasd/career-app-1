import {
  ArrowToRightSvg,
  FilterSvg,
  BriefcaseSvg,
  HideSvg,
  LocationSvg,
  LogoSvg,
  ExperienceSvg,
  TimeSvg,
  XmarkSvg,
  MoreFiltersSvg,
  SalarySvg,
  GraduationSvg,
  StackSvg,
  CalendarSvg,
  TomeJobSvg,
  ShowSvg,
} from './Svg';

const svgComponents = {
  arrowToRight: ArrowToRightSvg,
  filter: FilterSvg,
  briefcase: BriefcaseSvg,
  hide: HideSvg,
  show: ShowSvg,
  location: LocationSvg,
  experience: ExperienceSvg,
  logo: LogoSvg,
  time: TimeSvg,
  xmark: XmarkSvg,
  moreFilters: MoreFiltersSvg,
  salary: SalarySvg,
  graduation: GraduationSvg,
  stack: StackSvg,
  calendar: CalendarSvg,
  tomeJob: TomeJobSvg,
};

const Icon = ({ name, ...props }) => {
  const SvgComponent = svgComponents[name] || <svg></svg>;
  return <SvgComponent {...props} />;
};

export default Icon;
