---
id: ex-ch07-volterra-predateurs-proies
type: exercise
chapters: [7, 5]
title: "Le système de Lotka–Volterra : intégrale première, solutions globales et périodiques"
source: "Classique (modèle proies–prédateurs de Lotka–Volterra, cf. Hirsch–Smale–Devaney, *Differential Equations, Dynamical Systems, and an Introduction to Chaos*, ch. 11) — rédaction (preuve de la périodicité par l'angle) inventée"
difficulty: 4
time: 75
tools: [ch07-cauchy-lipschitz, ch07-restriction-domaine-c1-lipschitz, ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch07-lemme-des-bouts, ch07-translation-temps-autonome, ch05-composition-differentielles]
---
## Énoncé

Soient $a,b,c,d$ quatre réels **strictement positifs**. On étudie le système (proies $x$, prédateurs $y$)
$$
(LV)\qquad\begin{cases}x'(t)=x(t)\big(a-b\,y(t)\big)\\ y'(t)=y(t)\big(d\,x(t)-c\big)\end{cases}
$$
c'est-à-dire $\alpha'=X(\alpha)$ avec $\alpha=(x,y)$ et $X(x,y)=\big(x(a-by),\ y(dx-c)\big)$ sur $\R^2$. On note $Q=\,]0,+\infty[^2$ (quadrant ouvert) et $p^*=\big(\frac cd,\frac ab\big)$.

*Rappel admis (relèvement de l'argument).* Si $\gamma=(\gamma_1,\gamma_2):I\to\R^2\setminus\{0\}$ est de classe $C^1$ sur un intervalle $I$, il existe $\theta:I\to\R$ de classe $C^1$ telle que $\gamma(t)=\norm{\gamma(t)}\big(\cos\theta(t),\sin\theta(t)\big)$ pour tout $t\in I$, et alors $\theta'=\dfrac{\gamma_1\gamma_2'-\gamma_2\gamma_1'}{\gamma_1^2+\gamma_2^2}$ ($\norm{\cdot}$ : norme euclidienne).

**Partie A — Existence et invariance du quadrant.**

1. Montrer que pour toute condition initiale $(x_0,y_0)\in\R^2$ (en $t=0$), $(LV)$ possède une unique solution maximale, définie sur un intervalle ouvert $J$. Déterminer les points d'équilibre de $X$.
2. Déterminer explicitement les solutions maximales lorsque $x_0=0$, puis lorsque $y_0=0$. En déduire que si $(x_0,y_0)\in Q$, alors $(x(t),y(t))\in Q$ pour tout $t\in J$.

**Partie B — Une intégrale première et l'existence globale.**

On pose, pour $(x,y)\in Q$, $H(x,y)=d\,x-c\ln x+b\,y-a\ln y$.

3. Montrer que si $(x_0,y_0)\in Q$, alors $t\mapsto H(x(t),y(t))$ est constante sur $J$.
4. Pour $\lambda,\mu>0$, étudier $g(s)=\lambda s-\mu\ln s$ sur $]0,+\infty[$. En déduire que pour tout $h\in\R$, l'ensemble $K_h=\{(x,y)\in Q : H(x,y)\le h\}$ est compact et contenu dans un rectangle $[x_-,x_+]\times[y_-,y_+]$ avec $x_->0$ et $y_->0$.
5. En déduire que toutes les solutions maximales issues de $Q$ sont définies sur $\R$. (Qu'en est-il de celles issues du bord du quadrant ?)

**Partie C — Périodicité.**

6. Soit $e=(e_1,e_2)$ un vecteur unitaire et $S_e=\{s\ge0 : p^*+se\in Q\}$. Montrer que $s\mapsto H(p^*+se)$ est strictement croissante sur l'intervalle $S_e$. En déduire que $p^*$ est l'unique point de minimum de $H$ sur $Q$, et que chaque demi-droite ouverte $\{p^*+se : s>0\}$ rencontre chaque ligne de niveau $\{H=h\}$ en au plus un point.
7. On fixe $(x_0,y_0)\in Q\setminus\{p^*\}$, on note $(x,y)$ la solution maximale, $h=H(x_0,y_0)$, et $u=x-\frac cd$, $v=y-\frac ab$. Montrer que $(u(t),v(t))\neq(0,0)$ pour tout $t$, calculer $u'$ et $v'$ en fonction de $x,y,u,v$, et montrer qu'un relèvement $\theta$ de $(u,v)$ vérifie
$$
\theta'(t)=\frac{d\,y(t)\,u(t)^2+b\,x(t)\,v(t)^2}{u(t)^2+v(t)^2}\ \ge\ m:=\min(d\,y_-,\,b\,x_-)>0,
$$
où $x_-,y_-$ sont associés à $K_h$ par la question 4.
8. En déduire qu'il existe $T\in\,]0,2\pi/m]$ tel que $(x(T),y(T))=(x_0,y_0)$, puis que la solution est $T$-périodique.

**Partie D — Moyennes sur une période.**

9. Avec les notations de la question 8, montrer que
$$
\frac1T\int_0^Tx(t)\,dt=\frac cd,\qquad \frac1T\int_0^Ty(t)\,dt=\frac ab .
$$
10. On modélise une pêche qui prélève les deux espèces au même taux $\varepsilon\in\,]0,a[$ : $x'=x(a-by)-\varepsilon x$, $y'=y(dx-c)-\varepsilon y$. Comment évoluent les moyennes sur une période des proies et des prédateurs par rapport au cas sans pêche ?

## Indices

### Indice 1
Partie A : le champ est polynomial ; les axes sont faits de trajectoires, et une trajectoire ne peut pas en « croiser » une autre. Partie B : une quantité conservée dont les sous-niveaux sont compacts dans l'ouvert $Q$ — quel théorème donne alors l'existence pour tout temps ? Partie C : il faut montrer que la solution « fait le tour » de $p^*$ et revient au même point.

### Indice 2
Question 2 : si $x(t_1)=0$, comparer avec la solution $t\mapsto\big(0,\,y(t_1)e^{-c(t-t_1)}\big)$ (unicité). Question 3 : dériver $H(x(t),y(t))$, on trouve $(dx-c)(a-by)+(by-a)(dx-c)$. Question 5 : lemme des bouts pour le champ autonome $X$ restreint à l'ouvert $U=Q$, avec le compact $K_h\subset Q$. Question 6 : $\phi(s)=H(p^*+se)$ vérifie $\phi'(0)=0$ et $\phi''>0$.

### Indice 3
Question 7 : $u'=x'=-b\,x\,v$ et $v'=y'=d\,y\,u$, puis $\theta'=\dfrac{uv'-vu'}{u^2+v^2}$ et $d\,y\,u^2+b\,x\,v^2\ge\min(dy,bx)(u^2+v^2)$. Question 8 : $\theta(t)\ge\theta(0)+mt$ et valeurs intermédiaires ; au temps $T$, le point est sur la même demi-droite issue de $p^*$ et sur la même ligne de niveau de $H$. Conclure par le théorème de translation dans le temps. Question 9 : intégrer $x'/x=a-by$ sur $[0,T]$.

## Corrigé

**Partie A.**

**1.** $X$ est un champ autonome sur $U=\R^2$, polynomial donc $C^1$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]). Par Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]), il existe pour toute condition initiale une unique solution maximale, définie sur un intervalle ouvert $J=J(x_0,y_0)\ni0$ ([[ch07-courbe-integrale-maximale-def]]).

Équilibres : $X(x,y)=0\iff x(a-by)=0$ et $y(dx-c)=0$. Si $x=0$, la seconde équation donne $-cy=0$, donc $y=0$. Si $x\neq0$, alors $y=a/b\neq0$, donc $dx=c$. Les équilibres sont $(0,0)$ et $p^*=\big(\frac cd,\frac ab\big)$ (ce dernier dans $Q$).

**2.** Si $x_0=0$ : $t\mapsto(0,\,y_0e^{-ct})$, définie sur $\R$, vérifie $x'=0=x(a-by)$ et $y'=-cy_0e^{-ct}=y(d\cdot0-c)$ : c'est la solution maximale ($J=\R$). Si $y_0=0$ : de même $t\mapsto(x_0e^{at},\,0)$, sur $\R$. Les deux axes sont donc **réunions de trajectoires**.

Soit $(x_0,y_0)\in Q$ et supposons $x(t_1)=0$ pour un $t_1\in J$. La courbe $\beta(t)=\big(0,\,y(t_1)e^{-c(t-t_1)}\big)$, définie sur $\R$, est une courbe intégrale de condition initiale $\big(t_1,(0,y(t_1))\big)$, comme $(x,y)$ ; par l'unicité globale, $(x,y)=\beta$ sur $J$, donc $x_0=x(0)=0$ : contradiction. Ainsi $x$ ne s'annule pas sur l'intervalle $J$ ; continue et positive en $0$, elle est strictement positive sur $J$ (valeurs intermédiaires). Même raisonnement pour $y$ avec les solutions $(x(t_1)e^{a(t-t_1)},0)$. Donc $(x(t),y(t))\in Q$ pour tout $t\in J$.

**Partie B.**

**3.** $H$ est $C^1$ sur l'ouvert $Q$ et la solution reste dans $Q$ (question 2). Par la règle de la chaîne ([[ch05-composition-differentielles]]),
$$
\frac{d}{dt}H(x,y)=\Big(d-\frac cx\Big)x'+\Big(b-\frac ay\Big)y'=(dx-c)(a-by)+(by-a)(dx-c)=0 .
$$
Donc $H(x(t),y(t))=H(x_0,y_0)$ pour tout $t\in J$ : $H$ est une **intégrale première** de $(LV)$ sur $Q$.

**4.** $g$ est $C^\infty$, $g'(s)=\lambda-\mu/s$, $g''(s)=\mu/s^2>0$ : $g$ est strictement convexe, décroissante sur $]0,\mu/\lambda]$, croissante sur $[\mu/\lambda,+\infty[$, de minimum $g(\mu/\lambda)$, et $g(s)\to+\infty$ quand $s\to0^+$ (car $-\mu\ln s\to+\infty$) et quand $s\to+\infty$ (car $\lambda s$ l'emporte sur $\mu\ln s$). Par conséquent, pour tout $\kappa\in\R$, $\{s>0 : g(s)\le\kappa\}$ est vide ou un **segment** $[s_-,s_+]$ avec $0<s_-\le s_+<+\infty$ (convexité + limites infinies aux deux bouts + continuité).

Écrivons $H(x,y)=g_1(x)+g_2(y)$ avec $g_1(s)=ds-c\ln s$, $g_2(s)=bs-a\ln s$, de minima $m_1=g_1(c/d)$, $m_2=g_2(a/b)$. Si $H(x,y)\le h$, alors $g_1(x)\le h-g_2(y)\le h-m_2$ et $g_2(y)\le h-m_1$. Donc
$$
K_h\subset R:=[x_-,x_+]\times[y_-,y_+],
$$
où $[x_-,x_+]=\{g_1\le h-m_2\}$ et $[y_-,y_+]=\{g_2\le h-m_1\}$ (si l'un est vide, $K_h=\emptyset$, compact). Comme $x_->0$ et $y_->0$, $R$ est un compact contenu dans $Q$ ; $H$ est continue sur $R$, donc $K_h=\{p\in R : H(p)\le h\}$ est fermé dans le compact $R$, donc **compact**, et $K_h\subset Q$.

**5.** Soit $(x_0,y_0)\in Q$ et $h=H(x_0,y_0)$. D'après 2, la solution maximale reste dans $Q$ ; c'est donc aussi la courbe intégrale maximale du champ $X_{|Q}$ sur l'ouvert $U=Q$ (une courbe intégrale de $X_{|Q}$ en est une de $X$, et réciproquement pour celles qui restent dans $Q$ : les intervalles maximaux coïncident). $X_{|Q}$ est autonome et $C^1$. D'après 3 et 4, $(x(t),y(t))\in K_h$ pour tout $t\in J$, et $K_h$ est un compact **de $Q$**. Le lemme des bouts ([[ch07-lemme-des-bouts]]), appliqué à la borne supérieure puis à la borne inférieure de $J$, donne $\sup J=+\infty$ et $\inf J=-\infty$ : $J=\R$.

Sur le bord du quadrant fermé, les solutions de la question 2 sont aussi définies sur $\R$ (en revanche, celles issues de $(x_0,y_0)$ avec $x_0<0$ ou $y_0<0$ peuvent exploser : ce n'est pas le domaine du modèle).

**Partie C.**

**6.** $Q$ est convexe, donc $S_e$ est un intervalle contenant $0$, de la forme $[0,s_{\max}[$. Posons $\phi(s)=H(p^*+se)=g_1\big(\tfrac cd+se_1\big)+g_2\big(\tfrac ab+se_2\big)$ pour $s\in S_e$. Alors
$$
\phi'(s)=e_1\,g_1'\big(\tfrac cd+se_1\big)+e_2\,g_2'\big(\tfrac ab+se_2\big),\qquad
\phi''(s)=\frac{c\,e_1^2}{(\frac cd+se_1)^2}+\frac{a\,e_2^2}{(\frac ab+se_2)^2}>0,
$$
la stricte positivité venant de $(e_1,e_2)\neq(0,0)$. De plus $\phi'(0)=e_1g_1'(c/d)+e_2g_2'(a/b)=0$. Donc $\phi'$ est strictement croissante, nulle en $0$, donc $\phi'(s)>0$ pour $s>0$ : $\phi$ est strictement croissante sur $S_e$.

Tout point $p\in Q\setminus\{p^*\}$ s'écrit $p^*+se$ avec $s=\norm{p-p^*}>0$, $e$ unitaire, $[0,s]\subset S_e$ ; donc $H(p)=\phi(s)>\phi(0)=H(p^*)$ : $p^*$ est l'unique point de minimum. Enfin si $p^*+s_1e$ et $p^*+s_2e$ ($s_1,s_2>0$) sont sur $\{H=h\}$, alors $\phi(s_1)=\phi(s_2)$, donc $s_1=s_2$ par stricte monotonie.

**7.** *Non-annulation.* Si $(u,v)(t_1)=(0,0)$, la solution passe par l'équilibre $p^*$ au temps $t_1$ ; par unicité globale elle est constante égale à $p^*$, donc $(x_0,y_0)=p^*$ : exclu.

*Calcul.* $u'=x'=x(a-by)=-b\,x\,\big(y-\tfrac ab\big)=-b\,x\,v$ et $v'=y'=y(dx-c)=d\,y\,\big(x-\tfrac cd\big)=d\,y\,u$.

*Angle.* $(u,v):\R\to\R^2\setminus\{0\}$ est $C^1$ ; d'après le rappel, il existe un relèvement $\theta$ de classe $C^1$, et
$$
\theta'=\frac{uv'-vu'}{u^2+v^2}=\frac{u\cdot d\,y\,u-v\cdot(-b\,x\,v)}{u^2+v^2}=\frac{d\,y\,u^2+b\,x\,v^2}{u^2+v^2}.
$$
Pour tout $t$, $(x(t),y(t))\in K_h\subset[x_-,x_+]\times[y_-,y_+]$ (questions 3–4), donc $d\,y(t)\ge d\,y_-$ et $b\,x(t)\ge b\,x_-$, d'où $d\,y\,u^2+b\,x\,v^2\ge m\,(u^2+v^2)$ avec $m=\min(dy_-,bx_-)>0$, et $\theta'(t)\ge m$.

**8.** *Retour.* Par la question 7, $\theta(t)\ge\theta(0)+mt$ pour $t\ge0$, donc $\theta(2\pi/m)\ge\theta(0)+2\pi$. $\theta$ étant continue et $\theta(0)<\theta(0)+2\pi$, le théorème des valeurs intermédiaires fournit $T\in\,]0,2\pi/m]$ avec $\theta(T)=\theta(0)+2\pi$. Notons $e=(\cos\theta(0),\sin\theta(0))$. Alors
$$
(x_0,y_0)=p^*+\rho(0)\,e,\qquad (x(T),y(T))=p^*+\rho(T)\,e,\qquad\rho=\norm{(u,v)}>0 :
$$
les deux points sont sur la même demi-droite ouverte issue de $p^*$, et sur la même ligne de niveau $\{H=h\}$ (question 3). Par la question 6, $\rho(T)=\rho(0)$, donc $(x(T),y(T))=(x_0,y_0)$.

*Périodicité.* Le champ $X_{|Q}$ est autonome. Par le théorème de translation dans le temps ([[ch07-translation-temps-autonome]]) avec $t_1=T\in J=\R$, la courbe $\beta(t)=\alpha(t+T)$ (où $\alpha=(x,y)$) est la courbe intégrale maximale de condition initiale $\alpha(T)=(x_0,y_0)$. Or $\alpha$ est aussi la courbe intégrale maximale de condition initiale $(x_0,y_0)$ ; par unicité, $\beta=\alpha$ : $\alpha(t+T)=\alpha(t)$ pour tout $t\in\R$. La solution est $T$-périodique.

**Partie D.**

**9.** Comme $x>0$, $\dfrac{x'(t)}{x(t)}=a-b\,y(t)$. En intégrant sur $[0,T]$ :
$$
\ln x(T)-\ln x(0)=aT-b\int_0^Ty(t)\,dt .
$$
Le membre de gauche est nul par périodicité, donc $\frac1T\int_0^Ty=\frac ab$. De même $\frac{y'}{y}=d\,x-c$ donne $0=d\int_0^Tx-cT$, soit $\frac1T\int_0^Tx=\frac cd$. Les moyennes sur une période sont **les coordonnées de l'équilibre**, quelle que soit l'orbite.

**10.** Le système avec pêche s'écrit $x'=x\big((a-\varepsilon)-by\big)$, $y'=y\big(dx-(c+\varepsilon)\big)$ : il est de la même forme avec $a'=a-\varepsilon>0$ (car $\varepsilon<a$), $b'=b$, $c'=c+\varepsilon>0$, $d'=d$. Toutes les questions précédentes s'appliquent : les solutions issues de $Q$ (autres que l'équilibre) sont périodiques et, sur une période,
$$
\overline x=\frac{c+\varepsilon}{d}>\frac cd,\qquad \overline y=\frac{a-\varepsilon}{b}<\frac ab .
$$
Une pêche modérée **augmente** la moyenne des proies et **diminue** celle des prédateurs (« principe de Volterra », qui expliquait l'augmentation de la proportion de prédateurs dans les prises de l'Adriatique quand la pêche a diminué pendant la Première Guerre mondiale).

## Pièges et variantes

* **Invariance du quadrant (question 2) : c'est l'unicité qui travaille.** « La population ne peut pas devenir négative » n'est pas une preuve ; il faut que les axes soient formés de trajectoires et invoquer l'unicité globale.
* **Lemme des bouts : le compact doit être contenu dans l'ouvert $U$.** Ici $H$ n'est défini que sur $Q$, et c'est la minoration $x\ge x_->0$, $y\ge y_->0$ qui garantit $K_h\subset Q$ ; « $(x,y)$ est bornée » ne suffirait pas à elle seule si l'on travaille avec $U=Q$. (Avec $U=\R^2$, la bornitude suffit, mais il faut alors le dire.)
* **Périodicité : « la trajectoire est une courbe fermée » ne suffit pas.** Il faut prouver que la solution **revient** au point de départ en temps fini : c'est le rôle de la minoration uniforme $\theta'\ge m>0$ (une solution qui tournerait de plus en plus lentement pourrait ne jamais boucler). Le retour au même point sur la demi-droite utilise la stricte monotonie de $H$ le long des rayons (question 6).
* **Unicité ⇒ périodicité.** Revenir une fois au point de départ suffit : c'est le Théorème VII.3.5 (translation dans le temps pour un champ **autonome**) ; pour un champ dépendant du temps, ce raisonnement est faux.
* Variante : pour le système amorti $x'=x(a-by-\eta x)$, $y'=y(dx-c)$ avec $\eta>0$ petit ($\eta c/d<a$), l'équilibre intérieur devient $\tilde p=(x^*,y^*)=\big(\frac cd,\frac{a-\eta c/d}{b}\big)$ et la fonction recentrée $\tilde H=d(x-x^*\ln x)+b(y-y^*\ln y)$ vérifie $\frac{d}{dt}\tilde H=-d\,\eta\,(x-x^*)^2\le0$ : elle n'est plus conservée mais **décroît** ; on peut alors montrer que les solutions tendent vers $\tilde p$ (il n'y a plus de cycles).
* Variante : la période $T$ dépend de l'orbite ; pour les petites orbites autour de $p^*$, la linéarisation $u'=-\frac{bc}{d}v$, $v'=\frac{ad}{b}u$ donne $T\to\dfrac{2\pi}{\sqrt{ac}}$.
