//@ts-nocheck
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Appbar, Chip } from "react-native-paper";
import { useTheme } from "react-native-paper";

const categories = ["Technology", "Sports", "Politics", "Health", "Business"];

const API_KEY = "pub_22249de10aa90eed244e703c888598e6a57f6";

const Home = () => {
  const theme = useTheme();
  const [newsData, setnewsData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelect = (val) => {
    setSelectedCategories((prev) =>
      prev.includes(val) ? prev.filter((cat) => cat !== val) : [...prev, val]
    );
  };

  const handlePress = async () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=dk&language=da${
      selectedCategories.length > 0 ? `&category=${selectedCategories.join()}` : ""
    }`;
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setnewsData(data); 
    } catch (err) {
      console.log(err);
    }
  };
  


  console.log(Object.keys(newsData[0]));

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title={"Home"}></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filtersContainer}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            mode="outlined"
            style={styles.chipItem}
            textStyle={{ fontWeight: "400", color: "white", padding: 1 }}
            selected={selectedCategories.includes(cat)}
            onPress={() => handleSelect(cat)}
          >
            {cat}
          </Chip>
        ))}
        <Button
          title="Refresh"
          mode="outlined"
          style={styles.button}
          labelStyle={{
            fontSize: 14,
            margin: "auto",
            color: theme.fonts.colors,
          }}
          icon="sync"
          onPress={handlePress}
        >
          Refresh
        </Button>
      </View>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filtersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  chipItem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 40,
  },
});
