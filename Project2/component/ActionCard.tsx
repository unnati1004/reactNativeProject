import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <View>
        <Text style={styles.headingText}>Blog Card</Text>
      </View>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript
          </Text>
        </View>
        <Image
          source={{
            uri: "https://content-writing-india.com/blog/wp-content/uploads/2018/03/1080px.jpg"
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Linking gives you a general interface to interact with both incoming and outgoing app links.

            Every Link (URL) has a URL Scheme, some websites are prefixed with https:// or http:// and the http is the URL Scheme. Let's call it scheme for short.

            In addition to https, you're likely also familiar with the mailto scheme. When you open a link with the mailto scheme, your operating system will open an installed mail application. Similarly, there are schemes for making phone calls and sending SMS. Read more about built-in URL schemes below.
          </Text>
        </View>
        <View>
          <TouchableOpacity
          //  onPress={()=>openWebsite('https://coding.blog/')}
          >
            <Text style={styles.socialLinks}>
              Read More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          //  onPress={()=>openWebsite('https://coding.blog/')}
          >
            <Text style={styles.socialLinks}>
              Follow me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  card: {
    width: 350,
    height: 340,
    borderRadius: 6,
    marginHorizontal: 16
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  cardImage: {
    height: 190
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6
  }
})