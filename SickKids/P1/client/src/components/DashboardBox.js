import {
    Box,
    Text
} from "@chakra-ui/react"

const DashboardBox = ({title, description}) => {
  return (
      <Box px={2}>
        <Box maxWidth="300px" maxHeight="300px" backgroundColor="white" p={2} boxShadow="xl">
            <Text fontSize="lg" color="blue.500" pb={2} fontWeight="bold">{title}</Text>
            <Text fontSize="md" color="blue.500" pb={2}>{description}</Text>
        </Box>
      </Box>
  )
};

export default DashboardBox;