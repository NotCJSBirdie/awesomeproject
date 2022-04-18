import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Carl's Application</Text>

        <Text style={styles.headerText}>Carl's Application</Text>
      </View>

      <ScrollView>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit
          nulla, interdum quis volutpat vitae, aliquet nec purus. Nulla laoreet
          odio leo, nec lacinia lectus porttitor non. Nulla et metus quis odio
          aliquam tempus. Curabitur eleifend ligula diam, sed cursus mi
          ullamcorper ac. Donec iaculis facilisis quam ac hendrerit. Donec at
          massa sed justo blandit ultricies a vitae orci. Duis bibendum libero
          nisl, sit amet feugiat sapien malesuada quis. Pellentesque nisl nisi,
          rutrum ac est a, auctor congue dui. Suspendisse interdum, urna eget
          auctor convallis, diam felis tristique risus, eu ullamcorper sapien
          nibh ut leo. In at pellentesque risus. Fusce ultricies vehicula
          tristique.
        </Text>

        <Text style={styles.text}>
          Nullam maximus tortor et velit commodo, eget molestie sapien
          imperdiet. Mauris pharetra quis felis eu interdum. Duis consectetur eu
          purus eget commodo. Morbi interdum, orci id mollis dapibus, diam
          turpis egestas dui, eu aliquet massa augue non quam. Vivamus hendrerit
          sodales sapien a condimentum. Cras molestie, diam quis congue
          suscipit, enim sapien porta magna, eu tincidunt mi justo quis mi. Nunc
          tristique eget magna vitae fermentum. Etiam vel nulla ligula. Aenean
          fringilla erat ligula, volutpat fringilla odio volutpat in. Maecenas
          vel nulla quam. Nulla euismod non nibh vel dignissim. Sed risus
          ligula, feugiat non mattis at, consectetur a massa. In iaculis
          scelerisque turpis id molestie. Aenean ac placerat sapien, quis
          venenatis libero.
        </Text>

        <Text style={styles.text}>
          Vestibulum ultricies bibendum faucibus. Cras cursus pharetra lorem non
          eleifend. Proin molestie, leo eget commodo sagittis, ex nisl dictum
          ex, ut porta lectus eros in felis. Nullam fringilla risus id blandit
          dictum. Sed augue nibh, iaculis ac imperdiet et, lacinia a velit. In
          in nunc commodo, tincidunt lorem sit amet, placerat libero. Integer
          aliquet metus nec leo auctor, eget pulvinar arcu tincidunt. Fusce
          facilisis ullamcorper tellus, vitae venenatis massa mattis eget. Sed
          diam ligula, pretium dapibus orci non, tempus porttitor nunc. Cras at
          sem est. Mauris ac est semper, lobortis tortor sed, tempor odio. Fusce
          pellentesque nibh quis vehicula malesuada. Nulla vestibulum id velit
          sed fringilla. Sed quis tincidunt risus.
        </Text>

        <Text style={styles.text}>
          Nam dapibus elit id neque porttitor, ut vulputate diam pellentesque.
          Praesent volutpat dapibus mi eu porttitor. Nullam euismod orci in eros
          finibus mattis. Donec laoreet ultricies risus, et lobortis magna
          interdum in. Phasellus sit amet mi et purus porta pulvinar sit amet
          quis turpis. Aenean sodales lorem ut turpis molestie facilisis. Nunc
          sed nunc est. Aliquam id elementum orci. Donec diam lectus, imperdiet
          non quam sed, malesuada ultrices nisl. Fusce id urna neque. Integer
          lacus quam, pharetra sit amet varius ut, semper sed ex. Nullam
          ullamcorper, justo in lobortis egestas, lectus mi facilisis quam, ut
          euismod diam ligula eu libero.
        </Text>

        <Text style={styles.text}>
          Nulla tincidunt id velit ac volutpat. Sed imperdiet turpis nec ante
          lacinia sollicitudin. Proin egestas diam nec lobortis tempor. Ut
          pulvinar libero ut erat ultrices cursus. Cras ullamcorper venenatis
          risus, nec semper ex consequat in. Nunc ultrices nec nunc id
          tristique. Nulla arcu urna, scelerisque et hendrerit sit amet,
          vestibulum sit amet tortor. Donec id nisi ut ante condimentum tempor
          quis sit amet neque. Nullam euismod mollis rhoncus. Maecenas risus
          nisi, aliquam id magna in, elementum tincidunt augue. Sed ligula
          libero, ornare at pellentesque ut, efficitur quis libero. Mauris
          ultricies, urna non fermentum commodo, nulla sem faucibus eros,
          vestibulum dignissim ipsum dolor sit amet est.
        </Text>
      </ScrollView>

      <View style={styles.button}>
        <Button
          onPress={() => {
            alert("You tapped the button!");
          }}
          title="Press Me"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00008b",
    paddingTop: 60,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {},
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
  },
  text: {
    fontSize: 30,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#00008b",
    color: "#fff",
  },
});
