package com.sauriengmientay;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.sauriengmientay.Service.UserDetailsServiceImp;


@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Bean
	public UserDetailsService userDetailsService() {
		return new UserDetailsServiceImp();
	};

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	};

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService()).passwordEncoder(passwordEncoder());
	}
	
	@Autowired
	AuthenticationSuccessHandler authenticationSuccessHandler;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
			.antMatchers("/lib/bootstrap/**",
                "/resources/**")
			.permitAll()
			.antMatchers("/forgotPassword").permitAll()
			.antMatchers("/changePassword").permitAll()
			.antMatchers("/register").permitAll()
			.antMatchers("/**").hasAnyRole("ADMIN", "STAFF")
			.anyRequest()
			.authenticated()
			.and()
			.formLogin()
			.loginPage("/login")
			.permitAll()
			.successHandler(authenticationSuccessHandler)
			.and()
			.logout().deleteCookies("JSESSIONID")
			.logoutSuccessUrl("/login")
			.and()
		    .exceptionHandling().accessDeniedPage("/accessDenied")
			.and()
			.csrf()
			.disable();
		http.rememberMe().key("uniqueAndSecret").tokenValiditySeconds(1296000);
	}

}