import React from 'react';
import { SafeAreaView, FlatList } from "react-native";

import { Button, Div, Fab, Icon, Image, Input, Text, ThemeProvider} from "react-native-magnus";

const TestMagnus = () => {

    const features = [
        "Muy bueno",
    ];

    return(
        <>
            <ThemeProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <Div mx="xl" mt="md">
                        <Image
                            h={140}
                            resizeMode="contain"
                            borderWidth={1}
                            borderColor="gray300"
                            rounded="lg"
                            w="100%"
                            source={{
                            uri:
                                "https://images.idgesg.net/images/article/2019/09/iphone-11-and-pros-100810657-large.jpg",
                            }}
                        />
                        <Text
                            fontSize="lg"
                            fontWeight="bold"
                            textTransform="uppercase"
                            color="red400"
                            letterSpacing={2}
                            mt="lg"
                        >
                            UI
                        </Text>
                        <Text fontWeight="bold" fontSize="4xl" mt="md">
                            react-native-magnus
                        </Text>
                        <Div mt="md" row>
                            <Text fontWeight="bold" mr="sm">
                                4.6
                            </Text>
                            <Text color="gray500">(3,444 reviews)</Text>
                        </Div>
                        <Text mt="md" color="gray700">
                            {`Depende -> color react-native-animatable react-native-modal react-native-vector-icons deepmerge validate-color`}
                        </Text>
                        <Div mt="md">
                            <FlatList
                                data={features}
                                renderItem={({ item }) => (
                                    <Div row mt="lg">
                                        <Icon name="checkcircleo" color="green700" />
                                        <Text ml="lg">{item}</Text>
                                    </Div>
                                )}
                            />
                        </Div>
                        <Button
                            mt="lg"
                            px="xl"
                            py="lg"
                            bg="white"
                            borderWidth={1}
                            borderColor="red500"
                            color="red500"
                            underlayColor="red100"
                        >
                            Contact Us
                        </Button>
                        <Button
                            mt="lg"
                            px="xl"
                            py="lg"
                            bg="green700"
                            color="white"
                            suffix={<Icon name="arrowright" ml="md" color="white" />}
                        >
                            Contact Us
                        </Button>
                        <Image
                            h={100}
                            w={100}
                            m={10}
                            rounded="circle"
                            source={{
                                uri:
                                "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                            }}
                        />
                        <Input
                            placeholder="Username"
                            p={10}
                            focusBorderColor="blue700"
                            suffix={<Icon name="search" color="gray900" fontFamily="Feather" />}
                        />
                    </Div>
                </SafeAreaView>
            </ThemeProvider>
            <Fab 
                bg="blue600" 
                h={50} 
                w={50} 
                icon={
                    <Icon color="gray100" fontFamily='MaterialCommunityIcons' fontSize={25} name="plus" h={100} w={100}/>
                } 
                activeIcon={
                    <Icon color="gray100" fontFamily='MaterialCommunityIcons' fontSize={25} name="close" h={100} w={100}/>
                }
            >
                <Button p="none" bg="transparent" justifyContent="flex-end">
                    <Div rounded="sm" bg="green500" p="sm">
                        <Text fontSize="md">Cheer</Text>
                    </Div>
                    <Icon
                        name="user"
                        color="gray100"
                        h={50}
                        w={50}
                        rounded="circle"
                        ml="md"
                        bg="green500"
                    />
                </Button>
                <Button p="none" bg="transparent" justifyContent="flex-end">
                    <Div rounded="sm" bg="green500" p="sm">
                        <Text fontSize="md">Boost</Text>
                    </Div>
                    <Icon
                        name="user"
                        color="gray100"
                        h={50}
                        w={50}
                        rounded="circle"
                        ml="md"
                        bg="green500"
                    />
                </Button>
            </Fab>
        </>
    );

}
 
export default TestMagnus;