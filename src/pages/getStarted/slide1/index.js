import React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';
import {ImgSlide1, Point1, ArrowRight} from '../../../assets';
import {StatusBar, SafeAreaView} from 'react-native';

const GetStarted1 = () => {
  return (
    // <StatusBar translucent={true} hidden={true} />
    <>
      <ImageBackground source={ImgSlide1} style={styles.page1}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <View style={styles.pageRoot}>
          <View style={styles.container}>
            <View style={styles.contentTop}>
              <Text style={styles.title}>Tes Kesehatan</Text>
              <Text style={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.contentBottom}>
              <Image source={Point1} style={styles.point} />
              <View style={styles.Next}>
                <Text style={styles.textNext}>Selanjutnya</Text>
                <Image source={ArrowRight} style={styles.Arrow} />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default GetStarted1;

const styles = StyleSheet.create({
  page1: {
    flex: 1,
    resizeMode: 'center',
  },
  pageRoot: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 73,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 17,
    marginTop: 16,
    fontFamily: 'Inter-Light',
    color: '#8B90A0',
  },
  contentTop: {},
  contentBottom: {
    flexDirection: 'row',
    marginTop: 107,
    justifyContent: 'space-between',
  },
  point: {
    width: 61,
    height: 15,
  },
  textNext: {
    fontSize: 14,
    fontFamily: 'Inter_SemiBold',
    color: '#1B578C',
    marginRight: 11,
  },
  Next: {
    flexDirection: 'row',
  },
  Arrow: {
    height: 15,
    width: 15,
  },
});
