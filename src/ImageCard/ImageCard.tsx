const ImageCard = ({ tl, tr, br, bl, src, ratio, ...props }) => (
  <Box position="relative" {...props}>
    <BackgroundImage width="100%" ratio={ratio} src={src} />
    {tl && (
      <Box position="absolute" top={0} left={0}>
        {tl}
      </Box>
    )}
    {tr && (
      <Box position="absolute" top={0} right={0}>
        {tr}
      </Box>
    )}
    {br && (
      <Box position="absolute" bottom={0} right={0}>
        {br}
      </Box>
    )}
    {bl && (
      <Box position="absolute" bottom={0} left={0}>
        {bl}
      </Box>
    )}
  </Box>
);

const BackgroundImage = system(
  {
    width: 1,
    ratio: 3 / 4,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    blacklist: ['src'],
  },
  'space',
  'color',
  'fontSize',
  'ratio',
  props => ({
    backgroundImage: props.src ? `url(${props.src})` : undefined,
  })
);
