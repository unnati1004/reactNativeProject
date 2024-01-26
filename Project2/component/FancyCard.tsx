import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
          render() {
                    return (
                              <View>
                                        <Text style={styles.headingText}>Trending places</Text>
                                        <View style={[styles.card, styles.cardElevated]}>
                                                  <Image source={{
                                                            uri: 'https://dynamic.tourtravelworld.com/blog_images/shanivar-vada-20161024040222.jpg'
                                                  }}
                                                            style={styles.cardImage}
                                                  />
                                                  <View style={styles.cardBody}>
                                                            <Text style={styles.cardTitle}>Shaniwar Wada</Text>
                                                            <Text style={styles.cardLabel}>Pune</Text>
                                                            <Text style={styles.cardDescription} >Built by Peshwa Baji Rao I in the year 1732, Shaniwar Wada stands witness to a gruesome murder committed to satisfy the thirst for power and glory. In 1773, the then ruling Peshwa, Narayanrao was cruelly murdered by his own guards on orders of his uncle Raghunathrao and aunt Anandibai. This magnificent fort is until date known to be haunted by the voice of Peshwa, screaming for help on every full moon night.</Text>
                                                            <Text style={styles.cardFooter}>12 mins Away</Text>
                                                  </View>
                                        </View>
                              </View>
                    )
          }
}

const styles = StyleSheet.create({
          headingText: {
                    fontSize: 24,
                    fontWeight: "bold",
                    paddingHorizontal: 8,
          },
          card: {
                    width: 350,
                    height: 360,
                    borderRadius: 6,
                    marginVertical: 12,
                    marginHorizontal: 16
          },
          cardElevated: {
                    backgroundColor: "#808080",
                    elevation: 3,
                    shadowOffset: {
                              width: 1,
                              height: 1
                    },
                    shadowColor: "#333",
                    shadowOpacity: 0.4
          },
          cardImage: {
                    height: 180,
                    marginBottom: 8,
                    borderTopLeftRadius: 6,
                    borderBottomRightRadius: 6,
          },
          cardBody: {
                    flex: 1,
                    flexGrow: 1,
                    paddingHorizontal: 12,
          },
          cardTitle: {
                    color: '#000000',
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginBottom: 6,
          },
          cardLabel: {
                    color: '#000000',
                    fontSize: 14,
                    marginBottom: 6,
          },
          cardDescription: {
                    color: '#242B2E',
                    fontSize: 12,
                    marginBottom: 12,
                    marginTop: 6,
                    flexShrink: 1,
          },
          cardFooter: {
                    color: '#000000',
          }
})