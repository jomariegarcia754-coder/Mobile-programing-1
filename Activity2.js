import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const menu = [
  {
    name: 'Honey Oat Latte',
    note: 'Espresso · oat milk · honey',
    price: '$5.80',
    tag: 'SIGNATURE',
  },
  {
    name: 'Brown Sugar Cold Brew',
    note: 'Cold brew · brown sugar cream',
    price: '$5.40',
    tag: 'POPULAR',
  },
  {
    name: 'Vanilla Bean Cappuccino',
    note: 'Espresso · silky milk · vanilla',
    price: '$5.20',
    tag: 'CLASSIC',
  },
];

const categories = ['Coffee', 'Pastry', 'Tea', 'Brunch'];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5EFE5" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.page}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>
              EST. 2018 · NEIGHBORHOOD COFFEE
            </Text>

            <Text style={styles.logo}>Hearth & Bean</Text>

            <Text style={styles.subLogo}>COFFEE HOUSE</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>HB</Text>
          </View>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <View style={styles.heroCopy}>
            <Text style={styles.heroEyebrow}>TODAY'S POUR</Text>

            <Text style={styles.heroTitle}>
              Slow mornings,{'\n'}good coffee.
            </Text>

            <Text style={styles.heroBody}>
              Small-batch beans, warm pastries, and a quiet corner waiting
              for you.
            </Text>

            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                EXPLORE MENU
              </Text>

              <Text style={styles.buttonArrow}>↗</Text>
            </Pressable>
          </View>

          {/* COFFEE CUP ILLUSTRATION */}
          <View style={styles.cupArt}>
            <View style={[styles.steam, styles.steamOne]} />
            <View style={[styles.steam, styles.steamTwo]} />

            <View style={styles.cupHandle} />

            <View style={styles.cup}>
              <View style={styles.coffee} />

              <Text style={styles.cupMark}>HB</Text>
            </View>
          </View>
        </View>

        {/* CATEGORY SECTION */}
        <View style={styles.sectionTop}>
          <View>
            <Text style={styles.sectionKicker}>
              CURATED FOR YOU
            </Text>

            <Text style={styles.sectionTitle}>
              What are you craving?
            </Text>
          </View>

          <Text style={styles.seeAll}>VIEW ALL</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {categories.map((category, index) => (
            <Pressable
              key={category}
              style={[
                styles.category,
                index === 0 && styles.categoryActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  index === 0 && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* FEATURED COFFEE */}
        <View style={styles.featureCard}>
          <View style={styles.featureImage}>
            <View style={[styles.bean, styles.bean1]} />
            <View style={[styles.bean, styles.bean2]} />
            <View style={[styles.bean, styles.bean3]} />

            <View style={styles.coffeeBag}>
              <Text style={styles.bagSmall}>
                SINGLE ORIGIN
              </Text>

              <Text style={styles.bagTitle}>
                ETHIOPIA
              </Text>

              <Text style={styles.bagBottom}>
                NATURAL · 250G
              </Text>
            </View>
          </View>

          <View style={styles.featureInfo}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>
                FEATURED BEAN
              </Text>
            </View>

            <Text style={styles.featureTitle}>
              Ethiopia Guji
            </Text>

            <Text style={styles.featureNote}>
              Strawberry · jasmine · cacao
            </Text>

            <View style={styles.featureFooter}>
              <Text style={styles.featurePrice}>
                $18 / BAG
              </Text>

              <Text style={styles.featureAction}>
                SHOP ↗
              </Text>
            </View>
          </View>
        </View>

        {/* MENU */}
        <View style={styles.sectionTop}>
          <View>
            <Text style={styles.sectionKicker}>
              HOUSE FAVORITES
            </Text>

            <Text style={styles.sectionTitle}>
              From the bar
            </Text>
          </View>
        </View>

        {menu.map((item) => (
          <Pressable
            key={item.name}
            style={styles.menuCard}
          >
            <View style={styles.menuIcon}>
              <View style={styles.miniCup}>
                <View style={styles.miniCoffee} />
              </View>
            </View>

            <View style={styles.menuCopy}>
              <View style={styles.menuNameRow}>
                <Text style={styles.menuName}>
                  {item.name}
                </Text>

                <Text style={styles.menuPrice}>
                  {item.price}
                </Text>
              </View>

              <Text style={styles.menuNote}>
                {item.note}
              </Text>

              <Text style={styles.menuTag}>
                {item.tag}
              </Text>
            </View>
          </Pressable>
        ))}

        {/* LOCATION */}
        <View style={styles.visitCard}>
          <View style={styles.visitTop}>
            <View>
              <Text style={styles.sectionKicker}>
                COME SAY HELLO
              </Text>

              <Text style={styles.visitTitle}>
                Your neighborhood{'\n'}coffee house.
              </Text>
            </View>

            <Text style={styles.pin}>⌖</Text>
          </View>

          <Text style={styles.address}>
            24 Willow Street · Open daily 7AM — 7PM
          </Text>

          <View style={styles.visitActions}>
            <Pressable style={styles.darkButton}>
              <Text style={styles.darkButtonText}>
                GET DIRECTIONS
              </Text>
            </Pressable>

            <Pressable style={styles.outlineButton}>
              <Text style={styles.outlineButtonText}>
                HOURS
              </Text>
            </Pressable>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerLogo}>HB</Text>

          <View>
            <Text style={styles.footerName}>
              HEARTH & BEAN
            </Text>

            <Text style={styles.footerSub}>
              COFFEE · COMMUNITY · SLOW MORNINGS
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5EFE5',
  },

  page: {
    paddingBottom: 30,
    backgroundColor: '#F5EFE5',
  },

  /* HEADER */

  header: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  kicker: {
    color: '#8A6A4B',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1.7,
  },

  logo: {
    color: '#29231D',
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: -1,
    marginTop: 4,
  },

  subLogo: {
    color: '#8A6A4B',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: 1,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2E261F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#E8C98D',
    fontSize: 12,
    fontWeight: '900',
  },

  /* HERO */

  hero: {
    marginHorizontal: 16,
    backgroundColor: '#D9B982',
    borderRadius: 25,
    minHeight: 280,
    padding: 21,
    overflow: 'hidden',
    flexDirection: 'row',
  },

  heroCopy: {
    flex: 1,
    zIndex: 2,
  },

  heroEyebrow: {
    color: '#5D4631',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.8,
  },

  heroTitle: {
    color: '#29231D',
    fontSize: 32,
    lineHeight: 32,
    fontWeight: '900',
    letterSpacing: -1.1,
    marginTop: 8,
  },

  heroBody: {
    color: '#604A35',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 11,
    maxWidth: 205,
  },

  primaryButton: {
    marginTop: 18,
    alignSelf: 'flex-start',
    backgroundColor: '#29231D',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#F5EFE5',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  buttonArrow: {
    color: '#E8C98D',
    fontSize: 14,
    marginLeft: 9,
  },

  /* COFFEE CUP */

  cupArt: {
    width: 120,
    height: 230,
    position: 'absolute',
    right: -5,
    bottom: -4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  steam: {
    position: 'absolute',
    width: 3,
    height: 42,
    backgroundColor: '#8E704F',
    borderRadius: 3,
    opacity: 0.45,
    top: 20,
  },

  steamOne: {
    right: 46,
    transform: [{ rotate: '-8deg' }],
  },

  steamTwo: {
    right: 67,
    height: 31,
    transform: [{ rotate: '10deg' }],
  },

  cup: {
    width: 105,
    height: 92,
    backgroundColor: '#F5EFE5',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    alignItems: 'center',
    paddingTop: 9,
    marginBottom: 24,
  },

  coffee: {
    width: 82,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#3A2418',
  },

  cupMark: {
    color: '#8A6A4B',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 17,
  },

  cupHandle: {
    position: 'absolute',
    width: 35,
    height: 43,
    borderWidth: 8,
    borderColor: '#F5EFE5',
    borderLeftColor: 'transparent',
    borderRadius: 25,
    right: 2,
    bottom: 47,
  },

  /* SECTION */

  sectionTop: {
    paddingHorizontal: 20,
    marginTop: 29,
    marginBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  sectionKicker: {
    color: '#8A6A4B',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.6,
    marginBottom: 4,
  },

  sectionTitle: {
    color: '#29231D',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.5,
  },

  seeAll: {
    color: '#6F5238',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
  },

  /* CATEGORIES */

  categoryRow: {
    paddingHorizontal: 20,
    gap: 8,
  },

  category: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D3C6B5',
  },

  categoryActive: {
    backgroundColor: '#29231D',
    borderColor: '#29231D',
  },

  categoryText: {
    color: '#6F6255',
    fontSize: 10,
    fontWeight: '800',
  },

  categoryTextActive: {
    color: '#F5EFE5',
  },

  /* FEATURED COFFEE */

  featureCard: {
    marginHorizontal: 16,
    marginTop: 17,
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E1D8CA',
  },

  featureImage: {
    height: 190,
    backgroundColor: '#C7B6A0',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  coffeeBag: {
    width: 130,
    height: 155,
    backgroundColor: '#29231D',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-3deg' }],
  },

  bagSmall: {
    color: '#D9B982',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 1.4,
  },

  bagTitle: {
    color: '#F5EFE5',
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 12,
  },

  bagBottom: {
    color: '#C8BCA9',
    fontSize: 7,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 28,
  },

  bean: {
    position: 'absolute',
    width: 38,
    height: 22,
    backgroundColor: '#4B3020',
    borderRadius: 50,
    opacity: 0.85,
  },

  bean1: {
    left: 25,
    top: 30,
    transform: [{ rotate: '35deg' }],
  },

  bean2: {
    right: 25,
    top: 50,
    transform: [{ rotate: '-20deg' }],
  },

  bean3: {
    left: 48,
    bottom: 18,
    transform: [{ rotate: '-10deg' }],
  },

  featureInfo: {
    padding: 17,
  },

  pill: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFE5D5',
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  pillText: {
    color: '#8A6A4B',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
  },

  featureTitle: {
    color: '#29231D',
    fontSize: 23,
    fontWeight: '900',
    marginTop: 10,
  },

  featureNote: {
    color: '#817466',
    fontSize: 11,
    marginTop: 4,
  },

  featureFooter: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E9E1D6',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  featurePrice: {
    color: '#29231D',
    fontSize: 10,
    fontWeight: '900',
  },

  featureAction: {
    color: '#8A6A4B',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  /* MENU */

  menuCard: {
    marginHorizontal: 16,
    marginBottom: 9,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E1D8CA',
  },

  menuIcon: {
    width: 61,
    height: 61,
    borderRadius: 14,
    backgroundColor: '#E8DED0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  miniCup: {
    width: 33,
    height: 29,
    backgroundColor: '#F5EFE5',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    alignItems: 'center',
    paddingTop: 4,
  },

  miniCoffee: {
    width: 25,
    height: 6,
    backgroundColor: '#4B3020',
    borderRadius: 5,
  },

  menuCopy: {
    flex: 1,
    marginLeft: 12,
  },

  menuNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },

  menuName: {
    color: '#29231D',
    fontSize: 13,
    fontWeight: '900',
    flex: 1,
  },

  menuPrice: {
    color: '#6F5238',
    fontSize: 11,
    fontWeight: '900',
  },

  menuNote: {
    color: '#887B6C',
    fontSize: 10,
    marginTop: 4,
  },

  menuTag: {
    color: '#9B744E',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginTop: 8,
  },

  /* LOCATION */

  visitCard: {
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: '#29231D',
    borderRadius: 21,
    padding: 20,
  },

  visitTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  visitTitle: {
    color: '#F5EFE5',
    fontSize: 25,
    lineHeight: 27,
    fontWeight: '900',
    marginTop: 4,
  },

  pin: {
    color: '#D9B982',
    fontSize: 31,
  },

  address: {
    color: '#BEB1A2',
    fontSize: 10,
    marginTop: 16,
  },

  visitActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 17,
  },

  darkButton: {
    backgroundColor: '#D9B982',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },

  darkButtonText: {
    color: '#29231D',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.7,
  },

  outlineButton: {
    borderWidth: 1,
    borderColor: '#75695D',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },

  outlineButtonText: {
    color: '#F5EFE5',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.7,
  },

  /* FOOTER */

  footer: {
    paddingHorizontal: 21,
    paddingTop: 27,
    flexDirection: 'row',
    alignItems: 'center',
  },

  footerLogo: {
    width: 37,
    height: 37,
    borderRadius: 19,
    backgroundColor: '#D9B982',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#29231D',
    fontSize: 11,
    fontWeight: '900',
    marginRight: 10,
  },

  footerName: {
    color: '#29231D',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  footerSub: {
    color: '#9A8C7B',
    fontSize: 6,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 3,
  },
});