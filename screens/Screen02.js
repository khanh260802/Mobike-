import { View, Text, StyleSheet, Image, Pressable } from 'react-native'; 
import { FlatList } from 'react-native-web';
import data from '../data/data'
import { useState } from 'react';
const Screen02 = ({navigation}) => {
    const [listBikes, setListBikes] = useState(data); 
    const [filter, setFiler] = useState('all')
    const Item = ({item}) => { 
        return <Pressable 
                    style={styles.item}
                    onPress={()=>navigation.navigate('Screen03',{item})}
                >
            <Image style={styles.item_icon} source={require('../assets/ant-design_heart-twotone.svg')}/>
            <Image style={styles.item_img} source={item.img}/>
            <Text style={styles.item_name}>{item.name}</Text>
            <Text style={styles.item_price}>  
                <Text style={{
                    fontSize: 20,
                    color: "#f7ba83",
                }}> $ </Text>
                {item.price}
            </Text>
        </Pressable>
    }
    const handleAll = () => { 
        setListBikes(data);  
        setFiler('all')
    }
    const handleRoadbike = () => { 
        setListBikes(data.filter((item)=> item.type === 'roadbike'))
        setFiler('roadbike')
    }
    const handleMountain = () => { 
        setListBikes(data.filter((item)=> item.type === 'Mountain'))
        setFiler('Mountain')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>The world’s Best Bike</Text>
            <View style={styles.group_btn}>
                <Pressable onPress={handleAll} style={styles.btn}>
                    <Text style={[styles.btn_text, { 
                        color: filter==='all' ? '#e94141' :'#beb6b6',
                    }]}> All </Text>
                </Pressable>
                <Pressable onPress={handleRoadbike} style={styles.btn}>
                    <Text style={[styles.btn_text, { 
                        color: filter==='roadbike' ? '#e94141' :'#beb6b6',
                    }]}> Roadbike </Text>
                </Pressable>
                <Pressable onPress={handleMountain} style={styles.btn}>
                    <Text style={[styles.btn_text, { 
                        color: filter==='Mountain' ? '#e94141' :'#beb6b6',
                    }]}> Mountain </Text>
                </Pressable>
            </View>

            <FlatList 
                data={listBikes} 
                renderItem={({item}) => <Item item={item}/>}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.body}
                numColumns={2}
            />
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
        fontSize: 25,
        fontWeight: "700",
        color: "#e94141",
        paddingVertical: 20, 
    },
    
    group_btn: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: '100%', 
        paddingBottom: 10, 
    },
    btn: {
        borderRadius: 5,
        backgroundColor: "rgba(196, 196, 196, 0)",
        borderStyle: "solid",
        borderColor: "rgba(233, 65, 65, 0.53)",
        borderWidth: 1,
        width: 100, 
        height: 32, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    btn_text: {
        fontSize: 20,
        color: "#beb6b6",
    },
    body : { 
        flex: 1, 
        flexDirection: 'column',
        width: '100vw', 
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
    }, 
    item: {
        borderRadius: 10,
        backgroundColor: "rgba(247, 186, 131, 0.15)",
        width: 167, 
        height: 200, 
        margin: 10, 
        alignItems: 'center',
    },
    item_img: {
        height: 130, 
        width: 127,
        marginTop: 6, 
        resizeMode: 'contain', 
    },
    item_icon: {
        width: 25, 
        height: 25, 
        position: 'absolute', 
        left: 10, 
        top: 6, 
    },
    item_name: {
        fontSize: 20,
        color: "rgba(0, 0, 0, 0.6)",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 25,
    },
    item_price: {
        fontSize: 20,
        color: "#000",
        textAlign: "center"
    },
    
})

export default Screen02; 