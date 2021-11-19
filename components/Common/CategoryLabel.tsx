import { Box, Text } from 'grommet'
import { Status } from '../../type'

export default function CategoryLabel({ category }: { category: string }) {
  return (
    <Box direction="row">
      <Box
        background="accent-1"
        pad={{ vertical: '4px', horizontal: '10px' }}
        style={{ borderRadius: 4 }}
      >
        <Text size="small">{category}</Text>
      </Box>
    </Box>
  )
}
