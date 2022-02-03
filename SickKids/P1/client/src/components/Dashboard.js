import axios from "axios";
import { useState } from "react";
import {
  Center,
  Heading,
  Text,
  Link,
  Wrap
} from "@chakra-ui/react"
import DashboardBox from "./DashboardBox";

const Dashboard = () => {
  const [email, setEmail] = useState("");
  axios
    .get("http://localhost:5000/")
    .then(res => setEmail(res.data.email))
    .catch(err => console.log(err))

  return (
    <Center
      flexDirection="column"
      px={2}
    >
      <Heading fontSize="5xl" color="blue.500" textAlign="center" pb={4}>Hello {email}</Heading>
      <Text maxWidth="900px" textAlign="center" color="blue.500" pb={4}>The Nurturing the Seed app is an online developmental support planning tool that helps frontline practicioners create a developmental support plan for a young child based on the child's strengths and developmental needs.</Text>
      <Link textDecoration="underline" fontSize="lg" color="green" pb={8}>Learn more about how the app works.</Link>
      <Wrap justify="center" pb={4}>
        <DashboardBox title="Easy to Navigate" description="Quickly navigating and locating developmental strategies by developmental area." />
        <DashboardBox title="Time Efficient" description="Easily creating a printable developmental support plan without any formatting effort." />
        <DashboardBox title="Family-Friendly" description="Collaboratively ensuring caregivers' expertise and knowledge of the child are reflected in the pain." />
        <DashboardBox title="Portable" description="Being able to create a plan anywhere by using a mobile device and easily sharing with families." />
      </Wrap>
    </Center>
  )}

export default Dashboard;