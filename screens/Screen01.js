import { View, Text, StyleSheet, Image, Pressable } from 'react-native'; 
const Screen01 = ({navigation}) => {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>A premium online store for sporter and their stylish choice </Text>
            <View style= {styles.wrap_img}>
                <Image 
                    source={require('../assets/bifour_-removebg-preview.png')} 
                    style= {styles.img}
                />
            </View>
            <Text style={styles.slogan}>POWER BIKE SHOP</Text>
            <Pressable 
                style={styles.btn} 
                onPress={() => navigation.navigate('Screen02')}
            >
                <Text style={styles.btn_text}> Get Started </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10, 
    }, 
    title: { 
        fontSize: 26,
        fontFamily: "VT323-Regular",
        color: "#000",
        textAlign: "center",
        paddingVertical: 20, 
    },
    wrap_img: { 
        backgroundColor: 'rgba(233, 65, 65, 0.1)', 
        width: "100%",
        height: 388, 
        borderRadius: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 20, 
    }, 
    img: { 
        width: 292, 
        height: 270, 
    },
    slogan: { 
        fontSize: 26,
        fontWeight: "700",
        fontFamily: "Ubuntu-Bold",
        padding: 20, 
    },
    btn: { 
        borderRadius: 20,
        backgroundColor: "#e94141",
        width: "80%",
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    btn_text: { 
        fontSize: 27,
        fontFamily: "VT323-Regular",
        color: "#fefefe",
        textAlign: "center",
    },
})

export default Screen01; 