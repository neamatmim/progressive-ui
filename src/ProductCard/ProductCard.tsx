const ProductCard = ({ shoe, ...props }) => (
  <ImageCard
    ratio={803 / 632}
    src={shoe.image}
    {...props}
    tl={shoe.status && <ProductTag>{statusText(shoe.status)}</ProductTag>}
    tr={<FavouriteButton p={2} m={2} isFavourite={shoe.favourite} />}
    bl={
      <Box ml={3} mb={2}>
        <HeadingWithDash dashWidth={1} fontSize={1} lineHeight="solid" mb={1}>
          {shoe.name}
        </HeadingWithDash>
        <Price {...shoe} />
      </Box>
    }
  />
);
