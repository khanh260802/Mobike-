import { View, Text, StyleSheet, Image, Pressable } from 'react-native'; 
const Screen03 = ({navigation, route}) => {
    const item = route?.params.item; 
    return (
        <View style={styles.container}>
            <View style={styles.imgWrap}>
                <Image style={styles.img} source={item.img}/>
            </View>
            <Text style={styles.name}>  
                {item.name}
            </Text>
            <View style={styles.saleOff}>
                <Text  style={styles.saleOffLeft}>15% OFF I 350$</Text>
                <Text  style={styles.saleOffRight}>449$</Text>
            </View>
            <View style={styles.desc}>
                <Text style={styles.descTitle}>Description</Text>
                <Text style={styles.descText}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
            </View>
            <View style={styles.bottom}>
                <Image 
                    style={styles.bottomImg}
                    source={require('../assets/akar-icons_heart.svg')}
                />
                <Pressable  style={styles.btn}>
                    <Text style={styles.btnText}>Add to card</Text>
                </Pressable>
            </View>
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

    imgWrap: {
        borderRadius: 5,
        backgroundColor: "rgba(233, 65, 65, 0.1)",
        width: "100%",
        height: 388,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    img: {
        width: 297,
        height: 340, 
        resizeMode: 'contain', 
    },
    name: {
        fontSize: 35,
        color: "#000",
        textAlign: "center",
        alignSelf: 'flex-start', 
    },
    saleOff: {
        flexDirection: 'row', 
        alignSelf: 'flex-start', 
    },
    saleOffLeft: {
        fontSize: 25,
        color: "rgba(0, 0, 0, 0.59)",
        textAlign: "center",
        marginRight: 40, 
    },
    saleOffRight: {
        fontSize: 25,
        textDecorationLine : 'line-through',
        color: "#000",
        textAlign: "center"
    },
    desc: {
        alignItems: 'flex-start', 
        alignSelf: 'flex-start', 
        width:'100%'
    },
    descTitle: {
        fontSize: 25,
        color: "#000",
        textAlign: "center"
    },
    descText: {
        fontSize: 18,
        color: "rgba(0, 0, 0, 0.57)",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        height: 104
    },
    bottom: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: '100%',
        alignItems: 'center', 
    },
    bottomImg: {
        width: 35,
        height: 35,
    },
    btn: {
        borderRadius: 30,
        backgroundColor: "#e94141",
        width: "60%",
        height: 54,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    btnText: {
        fontSize: 25,
        color: "#fffafa",
        textAlign: "center"
    },
    
})

export default Screen03; 