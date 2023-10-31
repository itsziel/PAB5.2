import { Heading, Text, Center,Image,Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { ScrollView as GluestackScrollView } from "@gluestack-ui/themed"; 
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <GluestackScrollView>
      <Header title={"News"} withBack={true} />
        <Image
            source={{ uri: params.image }}
            w="100%"
            h="20%"
            alt="Data foto"
            
        />
      <Box p={"$4"}>
        <Text fontSize={"$sm"}>{params.date}</Text>
        <Heading TextAlign="Left" fontSize={"$md" } fontWeight="bold">{params.title}</Heading>
        <Text fontSize={"$md"}>{params.content}</Text>
      </Box>

    </GluestackScrollView>
  );
};

export default NewsDetail;
