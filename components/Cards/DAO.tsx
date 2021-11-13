import React from 'react'
import { Box, Card, CardBody, CardFooter, Image, Heading, Text } from 'grommet'
import { BetterDAO } from '../../type'
import dayjs from 'dayjs'
import router from 'next/router'

const Identifier = ({
  children,
  title,
  subTitle,
  size,
  createdAt,
  ...rest
}) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box>
      <Heading level="2" margin="none">
        {title}
      </Heading>
      <Text size={size}>
        {subTitle.length > 50 ? subTitle.substr(0, 50) + '...' : subTitle}
      </Text>
      <Text size={size}>
        {Number(createdAt)
          ? dayjs(Number(createdAt) / 1000000).format('MMM DD, YYYY')
          : 'Unknown'}
      </Text>
    </Box>
  </Box>
)

function DAOCard({ dao }: { dao: BetterDAO }) {
  return (
    <Card
      background="status-critical"
      width="310px"
      height="300px"
      style={{ margin: 10 }}
      onClick={() => {
        router.push(`/dao/${dao.name}`)
      }}
    >
      <CardBody pad="small">
        <Identifier
          pad="small"
          title={dao.name}
          subTitle={dao.description}
          createdAt={dao.createdAt}
          size="small"
          align="start"
        >
          <Image
            src={dao.logoUrl ? dao.logoUrl : '/near-white.svg'}
            height={100}
            alt={dao.name}
          />
        </Identifier>
      </CardBody>
      <CardFooter
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background="rgba(255,255,255,0.2)"
      >
        <Text size="small">{`Owner: ${dao.owner}`}</Text>
      </CardFooter>
    </Card>
  )
}

export default DAOCard
