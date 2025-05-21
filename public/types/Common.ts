

export type About =
    {
    banner: string,
    bannerAlt: string,
    metaTitle: string,
    metaDescription: string,
    pageTitle: string,
    firstSection: {
      title: string,
      description: string,
      image: string,
      imageAlt: string
    },
    secondSection: {
      title: string,
      description: string,
      mission: {
        logoAlt: string,
        logo: string,
        description: string
      },
      vision: {
        logoAlt: string,
        logo: string,
        description: string
      },
      values: {
        logoAlt: string,
        logo: string,
        description: string
      }
    },
    thirdSection: {
      title: string,
      description: string,
      chairman: {
        imageAlt: string,
        image: string,
        name: string,
        description: string
      },
      ceo: {
        imageAlt: string,
        image: string,
        name: string,
        description: string
      }
    },
    certifications: [
      {
        title: string,
        image: string,
        imageAlt: string
      }
    ]
  }
export type Clients =
    {
    metaTitle: string,
    metaDescription: string,
    pageTitle: string,
    banner: string,
    bannerAlt: string,
    title: string,
    description: string,
    clients: [
      {
        image: string,
        imageAlt: string
      }
    ]
  }

 export type Commitments =
    {
    metaTitle: string,
    metaDescription: string,
    pageTitle: string,
    banner: string,
    bannerAlt: string,
    title: string,
    description: string,
    clients: [
      {
        image: string,
        imageAlt: string
      }
    ]
  }