import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const BookmarkScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Education Benefits</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📚 Learning Resources</Text>
          <Text style={styles.sectionText}>
            Access to premium educational content and courses
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎓 Scholarship Programs</Text>
          <Text style={styles.sectionText}>
            Apply for various scholarship opportunities
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💼 Career Development</Text>
          <Text style={styles.sectionText}>
            Professional development and skill enhancement programs
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Certifications</Text>
          <Text style={styles.sectionText}>
            Earn industry-recognized certifications
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👥 Mentorship</Text>
          <Text style={styles.sectionText}>
            Connect with experienced mentors in your field
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF9C01",
    marginBottom: 30,
    textAlign: "center",
  },
  section: {
    backgroundColor: "#1E1E2D",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#232533",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#CDCDE0",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "#CDCDE0",
    lineHeight: 20,
  },
});
