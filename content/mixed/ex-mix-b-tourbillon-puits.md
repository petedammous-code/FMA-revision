---
id: ex-mix-b-tourbillon-puits
type: exercise
chapters: [4, 7, 1]
title: Trajectoires de particules dans un tourbillon-puits
source: "Inventé (d'après l'écoulement potentiel du poly, § IV.4.1, p. 82)"
difficulty: 2
time: 35
tools: [ch04-ecoulement-potentiel, ch01-cauchy-riemann, ch01-derivee-f-rond-gamma, ch07-restriction-domaine-c1-lipschitz, ch07-cauchy-lipschitz, ch07-courbe-integrale-maximale-def, ch07-unicite-globale, ch02-logarithme-determination-principale-def]
---
## Énoncé

Soit $\Omega$ un ouvert de $\C$, identifié à un ouvert de $\R^2$ par $x+iy\leftrightarrow(x,y)$, et $g\in\Hol(\Omega)$. On considère l'écoulement plan dont la vitesse au point $z\in\Omega$ est le nombre complexe $\overline{g(z)}$ : une particule de fluide suit une solution de
$$
(E)\qquad z'(t)=\overline{g\big(z(t)\big)},\qquad t\in\R .
$$

1. a) On écrit $g=P+iQ$ avec $P,Q$ réelles. Écrire le champ de vecteurs $V:\Omega\to\R^2$ associé à $(E)$ et montrer que $\mathrm{div}\,V=0$ et $\mathrm{rot}\,V:=\partial_xV_2-\partial_yV_1=0$.
   b) Montrer que, pour tout $z_0\in\Omega$, $(E)$ admet une unique solution maximale $z:J(z_0)\to\Omega$ telle que $z(0)=z_0$.
2. On suppose dans cette question qu'il existe $G\in\Hol(\Omega)$ telle que $G'=g$.
   a) Montrer que, pour toute solution $z$ de $(E)$, $\dfrac{d}{dt}G\big(z(t)\big)=\big|g\big(z(t)\big)\big|^2$. En déduire que $\Im(G)$ est constante le long de chaque trajectoire et que $\Re(G)$ y est croissante.
   b) Montrer qu'une solution non constante ne passe jamais par un zéro de $g$, puis qu'elle n'est pas périodique.
3. Dans toute la suite, $\Omega=\C^*$, $\kappa>0$ est un réel fixé et
$$
g(z)=-\frac{1-i\kappa}{z}.
$$
Soit $z_0=r_0e^{i\theta_0}$ avec $r_0>0$, $\theta_0\in\R$, et $z$ la solution maximale de $(E)$ telle que $z(0)=z_0$.
   a) Montrer que $|z(t)|^2=r_0^2-2t$ pour tout $t\in J(z_0)$. En déduire que $\sup J(z_0)\le r_0^2/2$.
   b) Pour $s>0$ et $a\in\C$, on note $s^a=e^{a\ln s}$. Montrer que
$$
\zeta(t)=z_0\Big(1-\frac{2t}{r_0^2}\Big)^{(1+i\kappa)/2},\qquad t<\frac{r_0^2}{2},
$$
   est une solution de $(E)$, puis que $J(z_0)=\,]-\infty,r_0^2/2[$ et $z=\zeta$. Que devient $z(t)$ quand $t\to r_0^2/2$ ?
   c) Écrire $z(t)=r(t)e^{i\theta(t)}$ avec $r,\theta$ continues et $\theta(0)=\theta_0$. Montrer que la trajectoire est un arc de la spirale logarithmique $r=r_0e^{(\theta-\theta_0)/\kappa}$. Combien de tours la particule fait-elle autour de $0$ avant d'y arriver ?
   d) Calculer la longueur de la trajectoire parcourue entre l'instant $0$ et l'instant $r_0^2/2$. Commenter.
   e) Peut-on appliquer la question 2 sur $\Omega=\C^*$ ? Vérifier néanmoins la conclusion de 2 a) sur $\C\setminus\R_-$ avec $G(z)=-(1-i\kappa)\,\mathrm{Log}\,z$.

## Indices

### Indice 1
Tout se lit sur des quantités dérivées le long de la trajectoire : $G\big(z(t)\big)$ (dérivée d'une fonction holomorphe le long d'une courbe) et $|z(t)|^2=z(t)\overline{z(t)}$.

### Indice 2
$(G\circ z)'=G'(z)\,z'=g(z)\,\overline{g(z)}$ est un réel positif. Pour 2 b) : une fonction constante égale à un zéro de $g$ est solution, et l'unicité de Cauchy–Lipschitz fait le reste ; une fonction réelle **strictement** croissante ne reprend jamais deux fois la même valeur.

### Indice 3
Pour 3 a), $\frac{d}{dt}|z|^2=2\Re\big(\bar z\,z'\big)$. Pour 3 b), calculer $\zeta'/\zeta$ et $|\zeta|^2$ ; la maximalité découle de 3 a) et de la définition de $J(z_0)$.

### Indice 4
Pour 3 c), $\theta(t)=\theta_0+\Im\big(\tfrac{1+i\kappa}{2}\ln s\big)$ avec $s=1-2t/r_0^2$. Pour 3 d), $|z'(t)|=\sqrt{1+\kappa^2}/|z(t)|$ et l'intégrale (impropre) se calcule à vue.

## Corrigé

**1. a)** Si $g=P+iQ$, alors $\overline{g}=P-iQ$, donc $(E)$ s'écrit $x'=P(x,y)$, $y'=-Q(x,y)$ : le champ est $V=(P,-Q)$. Comme $g$ est holomorphe, $P$ et $Q$ sont $C^1$ et vérifient les conditions de Cauchy–Riemann ([[ch01-cauchy-riemann]]) $\partial_xP=\partial_yQ$ et $\partial_yP=-\partial_xQ$. Donc
$$
\mathrm{div}\,V=\partial_xP-\partial_yQ=0,\qquad \mathrm{rot}\,V=\partial_x(-Q)-\partial_yP=-(\partial_xQ+\partial_yP)=0 .
$$
L'écoulement est incompressible et irrotationnel, comme dans le poly ([[ch04-ecoulement-potentiel]]). (Si $G=\Phi+i\Psi$ est une primitive de $g$, $G'=\partial_x\Phi+i\partial_x\Psi=\partial_x\Phi-i\partial_y\Phi$ par Cauchy–Riemann, donc $\overline{G'}=\partial_x\Phi+i\partial_y\Phi$ : la vitesse est $\nabla\Phi$, gradient du potentiel des vitesses $\Phi=\Re(G)$, qui est harmonique.)

**b)** $g$ est holomorphe, donc de classe $C^\infty$ comme fonction de $(x,y)$ ([[ch01-holomorphe-analytique]]) ; $V$ est donc $C^1$ sur l'ouvert $\Omega$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]). Le champ est autonome, on prend $I=\R$. Le théorème de Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]) donnent l'existence et l'unicité d'une solution maximale $z:J(z_0)\to\Omega$ avec $z(0)=z_0$ ([[ch07-courbe-integrale-maximale-def]]), $J(z_0)$ intervalle ouvert contenant $0$.

**2. a)** $G$ est holomorphe et $z$ est $C^1$, donc ([[ch01-derivee-f-rond-gamma]])
$$
\frac{d}{dt}G\big(z(t)\big)=G'\big(z(t)\big)\,z'(t)=g\big(z(t)\big)\,\overline{g\big(z(t)\big)}=\big|g\big(z(t)\big)\big|^2 .
$$
Cette dérivée est réelle et positive : $\frac{d}{dt}\Im G(z(t))=0$, donc $\Im G\circ z$ est constante sur l'intervalle $J(z_0)$ (les trajectoires sont contenues dans les **lignes de courant** $\Im G=$ cste), et $\frac{d}{dt}\Re G(z(t))\ge0$, donc $\Re G\circ z$ est croissante.

**b)** Supposons $g\big(z(t_1)\big)=0$ pour un $t_1\in J(z_0)$ et posons $w(t)=z(t_1)$ pour tout $t\in\R$. Alors $w'=0=\overline{g(w)}$ : $w$ est une solution, de même valeur que $z$ en $t_1$. Par l'unicité globale ([[ch07-unicite-globale]], appliquée avec la condition initiale $(t_1,z(t_1))$), $z=w$ sur $J(z_0)$ : $z$ est constante. Donc si $z$ n'est pas constante, $g(z(t))\neq0$ pour tout $t$, et $t\mapsto\Re G(z(t))$ a une dérivée $|g(z(t))|^2>0$ : elle est **strictement** croissante. Si l'on avait $z(t+T)=z(t)$ avec $T>0$, on aurait $\Re G(z(T))=\Re G(z(0))$, contradiction. Une particule ne revient jamais à sa position de départ.

**3. a)** Ici $g$ est holomorphe sur $\C^*$ et $\overline{g(z)}=-\dfrac{1+i\kappa}{\bar z}=-(1+i\kappa)\dfrac{z}{|z|^2}$. Le long de la solution,
$$
\frac{d}{dt}|z|^2=z'\bar z+z\overline{z'}=2\Re\big(\bar z\,z'\big)=2\Re\Big(-(1+i\kappa)\frac{\bar z z}{|z|^2}\Big)=2\Re\big(-(1+i\kappa)\big)=-2 .
$$
Donc $|z(t)|^2=r_0^2-2t$ sur l'intervalle $J(z_0)$. Comme $z(t)\in\C^*$, $r_0^2-2t>0$ pour tout $t\in J(z_0)$, d'où $J(z_0)\subset\,]-\infty,r_0^2/2[$.

**b)** Posons $s(t)=1-2t/r_0^2>0$ et $a=\frac{1+i\kappa}{2}$, de sorte que $\zeta(t)=z_0e^{a\ln s(t)}$. Alors $\zeta$ est $C^1$, ne s'annule pas, $\zeta(0)=z_0$ et
$$
\zeta'(t)=z_0\,a\,\frac{s'(t)}{s(t)}e^{a\ln s(t)}=-\frac{(1+i\kappa)}{r_0^2\,s(t)}\,\zeta(t),\qquad |\zeta(t)|^2=r_0^2\,\big|e^{a\ln s}\big|^2=r_0^2e^{(\Re a)\,2\ln s}=r_0^2\,s(t).
$$
Donc $\zeta'(t)=-(1+i\kappa)\zeta(t)/|\zeta(t)|^2=\overline{g(\zeta(t))}$ : $\zeta$ est une solution de $(E)$ sur $]-\infty,r_0^2/2[$ avec $\zeta(0)=z_0$. Par définition de l'intervalle maximal ([[ch07-courbe-integrale-maximale-def]]), $]-\infty,r_0^2/2[\,\subset J(z_0)$ ; avec 3 a), $J(z_0)=\,]-\infty,r_0^2/2[$, et $z=\zeta$ par unicité. Quand $t\to r_0^2/2$, $|z(t)|=r_0\sqrt{s(t)}\to0$ : la particule tombe dans le puits $0$ en temps fini $r_0^2/2$ (ce qui explique, a posteriori, qu'elle ne puisse pas être prolongée dans $\Omega=\C^*$). Dans le passé, $|z(t)|\to+\infty$ quand $t\to-\infty$.

**c)** Avec $e^{a\ln s}=e^{\frac12\ln s}\,e^{i\frac\kappa2\ln s}$, on obtient la forme polaire (avec des fonctions continues)
$$
r(t)=r_0\sqrt{s(t)},\qquad \theta(t)=\theta_0+\frac\kappa2\ln s(t)=\theta_0+\kappa\ln\frac{r(t)}{r_0}.
$$
Ainsi $\theta-\theta_0=\kappa\ln(r/r_0)$, soit $r=r_0e^{(\theta-\theta_0)/\kappa}$ : la trajectoire est un arc de spirale logarithmique. Quand $t\to r_0^2/2$, $s\to0^+$ donc $\theta(t)\to-\infty$ : l'argument décroît sans borne, la particule fait **une infinité de tours** (dans le sens des aiguilles d'une montre) autour de $0$ avant d'y arriver, en un temps pourtant fini.

**d)** $|z'(t)|=|1+i\kappa|\,\dfrac{|z(t)|}{|z(t)|^2}=\dfrac{\sqrt{1+\kappa^2}}{\sqrt{r_0^2-2t}}$. Cette fonction est intégrable sur $[0,r_0^2/2[$ et
$$
L=\int_0^{r_0^2/2}\frac{\sqrt{1+\kappa^2}}{\sqrt{r_0^2-2t}}\,dt=\sqrt{1+\kappa^2}\Big[-\sqrt{r_0^2-2t}\Big]_0^{r_0^2/2}=\sqrt{1+\kappa^2}\;r_0 .
$$
La trajectoire a une longueur **finie** bien qu'elle fasse une infinité de tours : les tours rapetissent géométriquement (à chaque tour, $r$ est multiplié par $e^{-2\pi/\kappa}$). Pour $\kappa=0$ (puits pur) on retrouve le segment radial de longueur $r_0$. (Vérification numérique pour $\kappa=2$, $z_0=1+i$ : intégration de $(E)$ et formule de $\zeta$ concordent à $10^{-11}$ près, et la longueur vaut $\sqrt5\sqrt2\approx3{,}162$.)

**e)** Sur $\C^*$, $g$ n'a pas de primitive : $\int_{C(0,1)}g(z)\,dz=-(1-i\kappa)\,2i\pi\neq0$, alors que l'intégrale sur un lacet d'une fonction admettant une primitive holomorphe est nulle ([[ch01-integrale-primitive]]). La question 2 ne s'applique donc pas telle quelle sur $\C^*$. Sur $\C\setminus\R_-$, la détermination principale $\mathrm{Log}$ ([[ch02-logarithme-determination-principale-def]]) vérifie $\mathrm{Log}'(z)=1/z$, donc $G=-(1-i\kappa)\mathrm{Log}$ est une primitive de $g$. Pour $z=re^{i\theta}$ avec $\theta\in\,]-\pi,\pi[$ :
$$
G(z)=-(1-i\kappa)(\ln r+i\theta)=-\ln r-\kappa\theta+i\big(\kappa\ln r-\theta\big).
$$
Sur chaque intervalle de temps où la trajectoire reste dans $\C\setminus\R_-$, l'argument principal diffère de la fonction continue $\theta(t)$ de 3 c) d'une constante (multiple de $2\pi$), et 3 c) donne bien $\kappa\ln r(t)-\theta(t)=\kappa\ln r_0-\theta_0$ constant : c'est la conservation de $\Im G$. De plus $-\ln r$ croît (car $r$ décroît) et $-\kappa\theta$ croît (car $\theta$ décroît) : $\Re G$ croît, comme prévu en 2 a). L'absence d'orbite périodique est ici directe : $|z|^2$ décroît strictement.

## Pièges et variantes

* **Vitesse $\overline{g}$, pas $g$.** L'équation $z'=g(z)$ (champ holomorphe) a un comportement tout différent : pour $g(z)=1/z$, $z'=1/z$ donne $z(t)^2=z_0^2+2t$, alors que $z'=\overline{1/z}=z/|z|^2$ est une source radiale. C'est $\overline{G'}=\nabla\Re(G)$ qui est un champ de gradient.
* **Le lemme des bouts du poly** ([[ch07-lemme-des-bouts]]) est énoncé pour un champ lipschitzien, ce qui n'est pas le cas ici sur $\C^*$ ; on s'en passe grâce à la formule explicite et à l'argument de maximalité de 3 b).
* **Où est l'hypothèse « $G$ existe » ?** Variante : le tourbillon pur $g(z)=-i\kappa/z$ donne $z'=i\kappa z/|z|^2$, donc $|z|$ constant : toutes les trajectoires sont des **cercles périodiques** de période $2\pi r_0^2/\kappa$. Ce n'est pas en contradiction avec 2 b) : $g$ n'admet pas de primitive sur $\C^*$ (résidu non nul en $0$).
* Variante : $\kappa<0$ (rotation dans l'autre sens) ou source $g(z)=(1-i\kappa)/z$ (la particule vient de $0$ en $t=-r_0^2/2$ et part à l'infini).
