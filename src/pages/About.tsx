import { motion } from 'framer-motion';
import { Award, Globe, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-28 pb-16"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-cyber-blue">About</span>{' '}
          <span className="text-white">Cyber</span>{' '}
          <span className="text-cyber-pink">Scan</span>
        </h1>
        <p className="text-cyber-purple-200 text-lg md:text-xl max-w-3xl mx-auto">
          We're on a mission to create a safer internet for everyone by providing
          advanced tools to detect and prevent online threats.
        </p>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 text-cyber-blue">Our Story</h2>
          <div className="space-y-4 text-cyber-purple-100">
            <p>
              Hi, I'm Somesh, and I created CyberScan with a clear purpose: to make the internet
              a safer place for everyone. As a passionate developer, I noticed how challenging it
              was for regular users to identify dangerous websites and protect themselves from online threats.
            </p>
            <p>
              Drawing from my background in web development and cybersecurity, I developed CyberScan
              as a straightforward solution that anyone can use. My goal was simple: create a tool
              that helps people instantly check if a website is safe to visit.
            </p>
            <p>
              Today, I'm proud to offer this tool to help protect you from phishing attempts,
              malware, and other online dangers. CyberScan is my contribution to making the web
              a safer place for everyone.
            </p>
          </div>
        </div>
        <div className="cyber-card p-6 relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cybersecurity team"
            className="rounded-md w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Shield className="h-10 w-10" />,
              title: 'Security First',
              description: 'We prioritize security in everything we do, ensuring the highest standards of protection.'
            },
            {
              icon: <Users className="h-10 w-10" />,
              title: 'User Empowerment',
              description: 'We believe in empowering users with knowledge and tools to protect themselves online.'
            },
            {
              icon: <Award className="h-10 w-10" />,
              title: 'Excellence',
              description: 'We strive for excellence in our technology, constantly innovating to stay ahead of threats.'
            },
            {
              icon: <Globe className="h-10 w-10" />,
              title: 'Accessibility',
              description: 'We make advanced cybersecurity accessible to everyone, regardless of technical expertise.'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card p-6 bg-cyber-dark"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-cyber-pink">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-cyber-purple-200">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
