---
id: ex-mix-a-champs-holomorphes-complets
type: exercise
chapters: [7, 1, 2, 5]
title: "Champs de vecteurs holomorphes complets sur C : seuls les affines"
source: "Classique (flots des champs holomorphes complets du plan), rédaction et exemples inventés"
difficulty: 4
time: 60
tools: [ch07-flot-global-ouvert-regulier, ch07-proprietes-flot-formules, ch05-lemme-schwarz, ch01-c-derivable-ssi-df-c-lineaire, ch07-unicite-globale, ch07-groupe-un-parametre, ch02-automorphismes-de-c, ch01-def-biholomorphisme]
---
## Énoncé

Soit $F\in\Hol(\C)$. On identifie $\C$ à $\R^2$ et l'on considère l'équation différentielle autonome
$$
z'(t)=F\big(z(t)\big),
$$
c'est-à-dire le champ de vecteurs $X(x,y)=\big(\Re F(x+iy),\ \Im F(x+iy)\big)$ sur $\R^2$. Pour $z\in\C$, on note $J(z)$ l'intervalle de définition de la solution maximale valant $z$ en $t=0$, et $\Phi(t,z)$ sa valeur au temps $t\in J(z)$. On pose $\mathcal D=\{(t,z)\in\R\times\C : t\in J(z)\}$, et pour $t\in\R$ : $\mathcal D_t=\{z\in\C : t\in J(z)\}$ et $\Phi_t=\Phi(t,\cdot):\mathcal D_t\to\C$. On dit que $F$ est **complet** si $J(z)=\R$ pour tout $z\in\C$.

1. Justifier que $J(z)$ et $\Phi$ sont bien définis, que $\mathcal D$ et les $\mathcal D_t$ sont ouverts et que $\Phi$ est de classe $C^\infty$ sur $\mathcal D$. Pour $F(z)=z^2$, déterminer $J(z)$ et $\Phi(t,z)$ pour tout $z\in\C$ ; ce champ est-il complet ?
2. On fixe $z\in\C$ et l'on pose, pour $t\in J(z)$, $M(t)=d(\Phi_t)_z\in\mathcal L(\R^2)$. Montrer que $M$ est de classe $C^1$ et que
$$
M'(t)=A(t)\circ M(t),\qquad M(0)=\id,
$$
où $A(t)\in\mathcal L(\R^2)$ est la multiplication par le nombre complexe $F'\big(\Phi(t,z)\big)$.
3. En déduire que $M(t)$ est la multiplication par $m(t)=\exp\Big(\displaystyle\int_0^tF'\big(\Phi(s,z)\big)\,ds\Big)$, puis que, pour tout $t\in\R$, $\Phi_t$ est holomorphe sur $\mathcal D_t$ et que sa dérivée ne s'annule pas. Vérifier ce résultat pour $F(z)=z^2$.
4. On suppose $F$ complet. Montrer que, pour tout $t\in\R$, $\Phi_t$ est un biholomorphisme de $\C$ sur $\C$.
5. En déduire que si $F$ est complet, il existe $\alpha,\beta\in\C$ tels que $F(z)=\alpha z+\beta$ pour tout $z$.
6. * (a) Réciproquement, montrer que $F(z)=\alpha z+\beta$ est complet et calculer $\Phi$.
   * (b) On prend $F(z)=e^z$. Pour $z_0\in\C$, montrer que la solution maximale vérifie $e^{-z(t)}=e^{-z_0}-t$, et déterminer $J(z_0)$. Décrire l'ensemble des $z_0$ tels que $J(z_0)\neq\R$ ; est-ce cohérent avec la question 5 ?
7. On considère le champ **réel** $Y(x,y)=(\sin y,\,0)$ sur $\R^2$. Montrer qu'il est complet, calculer son flot, et expliquer précisément quelle étape du raisonnement des questions 2 à 5 tombe en défaut.

## Indices

### Indice 1
Il s'agit de transporter une propriété du champ (sa différentielle est une multiplication complexe) au flot. La bonne équation est celle que vérifie la différentielle du flot par rapport à la condition initiale ; on l'obtient en échangeant $\partial_t$ et $\partial_z$. Pour la question 5, que sait-on des bijections holomorphes de $\C$ sur $\C$ ?

### Indice 2
Question 2 : $\Phi$ est $C^2$, la symétrie de $d^2\Phi$ (Schwarz) donne $\partial_t\big(\partial_z\Phi\big)=\partial_z\big(\partial_t\Phi\big)=\partial_z\big(X\circ\Phi\big)$, et $dX_w$ est la multiplication par $F'(w)$. Question 3 : la multiplication par $m(t)$ vérifie la même équation linéaire avec la même condition initiale ; conclure par unicité.

### Indice 3
Question 4 : propriété de groupe $\Phi_s\circ\Phi_t=\Phi_{s+t}$. Question 5 : les automorphismes de $\C$ sont les $z\mapsto az+b$ ($a\ne0$) ; écrire $\Phi(t,z)=a(t)z+b(t)$, montrer que $a$ et $b$ sont $C^1$, et dériver en $t=0$. Question 6(b) : dériver $t\mapsto e^{-z(t)}$, ou vérifier que $Z(t)=z_0+\int_0^t\frac{ds}{e^{-z_0}-s}$ convient.

## Corrigé

**1.** $F$ est holomorphe, donc $C^\infty$ au sens réel ([[ch01-holomorphe-analytique]]) : le champ autonome $X$ est $C^\infty$ sur $\R^2$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]). Par Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]), chaque $z$ possède une unique solution maximale, définie sur un intervalle ouvert $J(z)\ni0$ ([[ch07-courbe-integrale-maximale-def]]). Le domaine $\mathcal D$ du flot est ouvert et $\Phi$ est $C^\infty$ sur $\mathcal D$ ([[ch07-flot-global-ouvert-regulier]]). Enfin $\mathcal D_t$ est l'image réciproque de $\mathcal D$ par l'application continue $z\mapsto(t,z)$, donc est ouvert.

*Exemple $F(z)=z^2$.* Pour $z=0$, la solution est constante et $J(0)=\R$. Pour $z\ne0$, posons $Z(t)=\dfrac{z}{1-tz}$, défini tant que $1-tz\ne0$ ; alors $Z(0)=z$ et
$$
Z'(t)=\frac{z\cdot z}{(1-tz)^2}=Z(t)^2 .
$$
* Si $z\notin\R$, $1-tz\neq0$ pour tout $t\in\R$ : $Z$ est solution sur $\R$, donc $J(z)=\R$ et $\Phi(t,z)=\dfrac z{1-tz}$.
* Si $z\in\R^*$, $1-tz$ s'annule seulement en $t=1/z$. Sur l'intervalle $I$ contenant $0$ où $1-tz\ne0$ ($I=\,]-\infty,1/z[$ si $z>0$, $I=\,]1/z,+\infty[$ si $z<0$), $Z$ est solution, donc $I\subset J(z)$ et $\Phi(t,z)=Z(t)$ sur $I$. Comme $|Z(t)|\to+\infty$ quand $t\to1/z$ dans $I$, la solution ne peut être définie en $1/z$ (elle y serait continue, donc bornée au voisinage) : $J(z)=I$.

Le champ $z^2$ n'est donc **pas complet** (il l'est seulement « hors de l'axe réel »). Par exemple, pour $t>0$, $\mathcal D_t=\C\setminus[1/t,+\infty[$.

**2.** Fixons $z$. Pour $t\in J(z)$, $z\in\mathcal D_t$ qui est ouvert, et $\Phi_t$ est $C^\infty$ sur $\mathcal D_t$, donc $M(t)=d(\Phi_t)_z=\frac{\partial\Phi}{\partial z}(t,z)$ (différentielle partielle par rapport à la variable $z\in\R^2$) est bien défini. Comme $\Phi$ est $C^2$ sur l'ouvert $\mathcal D\subset\R\times\R^2$, $t\mapsto\frac{\partial\Phi}{\partial z}(t,z)$ est $C^1$.

Le flot vérifie $\dfrac{\partial\Phi}{\partial t}(t,w)=X\big(\Phi(t,w)\big)$ sur $\mathcal D$ ([[ch07-proprietes-flot-formules]]). Par le lemme de Schwarz ([[ch05-lemme-schwarz]]), $d^2\Phi_{(t,z)}$ est symétrique ; appliqué aux vecteurs $(1,0)$ et $(0,h)$ de $\R\times\R^2$, cela s'écrit
$$
\frac{\partial}{\partial t}\Big(\frac{\partial\Phi}{\partial z}(t,z)\,h\Big)=\frac{\partial}{\partial z}\Big(\frac{\partial\Phi}{\partial t}\Big)(t,z)\,h=\frac{\partial}{\partial z}\big(X\circ\Phi\big)(t,z)\,h=dX_{\Phi(t,z)}\Big(\frac{\partial\Phi}{\partial z}(t,z)\,h\Big),
$$
la dernière égalité par la règle de la chaîne ([[ch05-composition-differentielles]]). Or $X$ n'est autre que $F$ vue comme application de $\R^2$ dans $\R^2$ ; $F$ étant holomorphe, $dX_w$ est la multiplication par $F'(w)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]). D'où $M'(t)h=F'\big(\Phi(t,z)\big)\,M(t)h$ pour tout $h$, c'est-à-dire $M'(t)=A(t)\circ M(t)$.

Enfin $\Phi_0=\id_\C$ (condition initiale), donc $M(0)=\id$.

**3.** La fonction $s\mapsto F'(\Phi(s,z))$ est continue sur $J(z)$, donc $m$ est $C^1$ sur $J(z)$, avec $m'(t)=F'(\Phi(t,z))\,m(t)$ et $m(0)=1$. Soit $N(t)\in\mathcal L(\R^2)$ la multiplication par $m(t)$ : $N'(t)=A(t)\circ N(t)$ et $N(0)=\id$. Posons $E=M-N:J(z)\to\mathcal L(\R^2)$ :
$$
E'(t)=A(t)\circ E(t),\qquad E(0)=0 .
$$
Le champ dépendant du temps $(t,B)\mapsto A(t)\circ B$ sur $J(z)\times\mathcal L(\R^2)$ est continu et $\sup_{t\in K}\norm{A(t)}$-lipschitzien en $B$ sur tout compact $K\subset J(z)$, donc localement lipschitzien en la seconde variable ; $E$ et la fonction nulle en sont deux courbes intégrales de même condition initiale $(0,0)$. Par l'unicité globale ([[ch07-unicite-globale]]), $E=0$ sur $J(z)$ : $M(t)$ est la multiplication par $m(t)$.

Soit maintenant $t\in\R$ et $z\in\mathcal D_t$ (donc $t\in J(z)$). $\Phi_t$ est $C^\infty$ sur l'ouvert $\mathcal D_t$ et sa différentielle en $z$ est $\C$-linéaire : par [[ch01-c-derivable-ssi-df-c-lineaire]], $\Phi_t$ est $\C$-dérivable en $z$, de dérivée $\Phi_t'(z)=m(t)\neq0$ (une exponentielle ne s'annule pas). Cette dérivée est continue en $z$ (c'est un coefficient de $d\Phi_t$, continue), donc $\Phi_t\in\Hol(\mathcal D_t)$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]).

*Vérification pour $F(z)=z^2$.* Pour $z\in\mathcal D_t$, $\Phi_t(z)=\frac z{1-tz}$ est bien holomorphe, de dérivée $\frac1{(1-tz)^2}$. D'autre part $m$ est l'unique solution de $m'=\frac{2z}{1-tz}m$, $m(0)=1$, et $y(t)=(1-tz)^{-2}$ vérifie $y'(t)=2z(1-tz)^{-3}=\frac{2z}{1-tz}y(t)$, $y(0)=1$ : donc $m(t)=(1-tz)^{-2}=\Phi_t'(z)$. (Contrôle numérique : en $t=0{,}7$, $z=0{,}2+0{,}5i$, les dérivées partielles du flot calculé numériquement vérifient $\partial_x\Phi_t=-i\,\partial_y\Phi_t\approx0{,}8303+0{,}8100i=(1-tz)^{-2}$.)

**4.** Si $F$ est complet, $\mathcal D=\R\times\C$ et $\mathcal D_t=\C$ pour tout $t$. Le flot d'un champ autonome complet vérifie $\Phi_s\circ\Phi_t=\Phi_{s+t}$ pour tous $s,t$, et $\Phi_0=\id_\C$ ([[ch07-groupe-un-parametre]]). Donc $\Phi_t\circ\Phi_{-t}=\Phi_{-t}\circ\Phi_t=\id_\C$ : $\Phi_t$ est une bijection de $\C$ sur $\C$, de réciproque $\Phi_{-t}$. Par la question 3, $\Phi_t$ et $\Phi_{-t}$ sont holomorphes sur $\C$ : $\Phi_t$ est un biholomorphisme de $\C$ sur $\C$ ([[ch01-def-biholomorphisme]]), c'est-à-dire un automorphisme de $\C$.

**5.** Les automorphismes de $\C$ sont les applications $z\mapsto az+b$ avec $a\in\C^\times$, $b\in\C$ ([[ch02-automorphismes-de-c]]). Pour chaque $t$, il existe donc $a(t)\in\C^\times$ et $b(t)\in\C$ avec
$$
\Phi(t,z)=a(t)\,z+b(t)\qquad(z\in\C).
$$
En faisant $z=0$ puis $z=1$ : $b(t)=\Phi(t,0)$ et $a(t)=\Phi(t,1)-\Phi(t,0)$. Comme $\Phi$ est $C^\infty$ sur $\R\times\C$, $a$ et $b$ sont $C^\infty$ sur $\R$, avec $a(0)=1$, $b(0)=0$. Enfin, par l'équation du flot en $t=0$,
$$
F(z)=X\big(\Phi(0,z)\big)=\frac{\partial\Phi}{\partial t}(0,z)=a'(0)\,z+b'(0),
$$
d'où le résultat avec $\alpha=a'(0)$, $\beta=b'(0)$. **Conclusion :** un champ holomorphe sur $\C$ est complet si et seulement s'il est affine (la réciproque est la question 6(a)).

**6. (a)** Si $\alpha=0$, $t\mapsto z+\beta t$ est solution sur $\R$. Si $\alpha\ne0$, posons $Z(t)=e^{\alpha t}z+\frac\beta\alpha\big(e^{\alpha t}-1\big)$ : $Z(0)=z$ et
$$
Z'(t)=\alpha e^{\alpha t}z+\beta e^{\alpha t}=\alpha\Big(e^{\alpha t}z+\tfrac\beta\alpha(e^{\alpha t}-1)\Big)+\beta=\alpha Z(t)+\beta .
$$
Dans les deux cas la solution est définie sur $\R$, donc $J(z)=\R$ pour tout $z$ : $F$ est complet, et $\Phi(t,z)=e^{\alpha t}z+\frac\beta\alpha(e^{\alpha t}-1)$ (resp. $z+\beta t$), qui est bien de la forme $a(t)z+b(t)$ avec $a'(0)=\alpha$, $b'(0)=\beta$.

**(b)** Soit $z$ la solution maximale issue de $z_0$, $c=e^{-z_0}$ et $\gamma(t)=c-t$. Sur $J(z_0)$,
$$
\frac{d}{dt}e^{-z(t)}=-z'(t)\,e^{-z(t)}=-e^{z(t)}e^{-z(t)}=-1,
$$
donc $e^{-z(t)}=c-t=\gamma(t)$ pour tout $t\in J(z_0)$. En particulier $\gamma$ ne s'annule pas sur $J(z_0)$.

Réciproquement, soit $I$ le plus grand intervalle ouvert contenant $0$ sur lequel $\gamma$ ne s'annule pas : $I=\R$ si $c\notin\R$, $I=\,]-\infty,c[$ si $c>0$, $I=\,]c,+\infty[$ si $c<0$. Sur $I$, posons $Z(t)=z_0+\int_0^t\frac{ds}{\gamma(s)}$ et $q(t)=e^{-Z(t)}/\gamma(t)$. Alors $Z'=1/\gamma$, $\gamma'=-1$ et
$$
q'(t)=\frac{-Z'(t)e^{-Z(t)}\gamma(t)+e^{-Z(t)}}{\gamma(t)^2}=0,
$$
donc $q\equiv q(0)=e^{-z_0}/c=1$, soit $e^{-Z}=\gamma$ et $Z'=\frac1\gamma=e^{Z}$ : $Z$ est solution sur $I$. Ainsi $I\subset J(z_0)$, et $J(z_0)\subset I$ puisque $\gamma\ne0$ sur $J(z_0)$ (intervalle contenant $0$). Donc
$$
J(z_0)=\begin{cases}\R & \text{si } e^{-z_0}\notin\R,\\ ]-\infty,\,e^{-z_0}[ & \text{si } e^{-z_0}>0,\\ ]e^{-z_0},\,+\infty[ & \text{si } e^{-z_0}<0.\end{cases}
$$
(Quand $t$ tend vers la borne finie, $|e^{-z(t)}|=|\gamma(t)|\to0$, c'est-à-dire $\Re z(t)\to+\infty$ : la solution explose.) L'ensemble des $z_0$ tels que $J(z_0)\ne\R$ est $\{z_0 : e^{-z_0}\in\R\}=\{z_0 : \Im z_0\in\pi\Z\}$, réunion de droites horizontales : il est non vide, ce qui est cohérent avec la question 5 ($e^z$ n'est pas affine, donc ne peut pas être complet). (Contrôle numérique : pour $z_0=0{,}3+2i\pi$, l'intégration numérique explose en $t\approx0{,}740818=e^{-0{,}3}$ ; pour $z_0=0{,}3+i$, la solution existe sur $[-50,50]$ et vérifie $e^{-z(50)}=e^{-z_0}-50$ à $10^{-9}$ près.)

**7.** $Y$ est $C^\infty$ et $1$-lipschitzien sur $\R^2$. Pour $(x,y)\in\R^2$, la courbe $\Psi_t(x,y)=(x+t\sin y,\ y)$ est définie pour tout $t\in\R$, vaut $(x,y)$ en $t=0$, et $\frac{d}{dt}\Psi_t(x,y)=(\sin y,0)=Y(\Psi_t(x,y))$ (car la seconde coordonnée reste $y$). C'est donc la solution maximale : $Y$ est complet, de flot $\Psi_t(x,y)=(x+t\sin y,y)$, qui n'est pas affine en $(x,y)$, et $Y$ non plus.

Ce qui tombe en défaut : $Y$, vu comme fonction $G(x+iy)=\sin y$ de $\C$ dans $\C$, n'est pas holomorphe ; sa différentielle
$$
dY_{(x,y)}=\begin{pmatrix}0&\cos y\\0&0\end{pmatrix}
$$
n'est pas une similitude directe. L'équation $M'=A\,M$ de la question 2 reste vraie (elle n'utilise que la régularité $C^2$ du flot), mais $A(t)$ n'est plus une multiplication complexe, et la solution $M(t)=d(\Psi_t)_{(x,y)}=\begin{pmatrix}1&t\cos y\\0&1\end{pmatrix}$ n'est pas $\C$-linéaire : la question 3 échoue, $\Psi_t$ est un $C^\infty$-difféomorphisme de $\R^2$ mais **pas** un automorphisme holomorphe de $\C$, et l'on ne peut plus invoquer la rigidité de la question 5 (les difféomorphismes de $\R^2$ sont beaucoup plus nombreux que les $z\mapsto az+b$).

## Pièges et variantes

* **Échanger $\partial_t$ et $\partial_z$ demande de la régularité** : ici $X$ est $C^\infty$, donc $\Phi$ aussi, et le lemme de Schwarz s'applique. Pour un champ seulement $C^1$, le flot est $C^1$ et l'équation aux variations reste vraie, mais il faut une autre preuve.
* **Unicité pour l'équation linéaire** : $M$ et $N$ vérifient la même équation $B'=A(t)B$ et la même condition initiale ; c'est Cauchy–Lipschitz dans l'espace de Banach $\mathcal L(\R^2)$ qui permet de conclure $M=N$. Écrire « $M(t)=\exp(\int_0^tA)$ » sans justification est faux en général (les $A(s)$ ne commutent pas toujours) ; c'est vrai ici parce que ce sont des multiplications complexes, qui commutent.
* **Holomorphie du flot $\neq$ complétude** : la question 3 vaut pour tout $F$ entier (même non complet), sur l'ouvert $\mathcal D_t$ qui peut être différent de $\C$ ; c'est seulement sous l'hypothèse de complétude que $\Phi_t$ devient un automorphisme de $\C$.
* **Champ affine et coefficient $a(t)$** : on n'a pas besoin de connaître $a$ et $b$ ; seule leur dérivabilité en $0$ sert. On retrouve d'ailleurs $a(t)=m(t)=e^{\alpha t}$ par la question 3.
* Variante (méthode de Picard) : on peut aussi prouver l'holomorphie de $\Phi_t$ en remarquant que les itérées de Picard $z\mapsto z+\int_0^tF(\phi_n(s,z))\,ds$ sont holomorphes en $z$ et convergent localement uniformément ([[ch03-weierstrass]]).
* Variante : sur le disque $D$, les champs holomorphes complets sont les champs dont le flot est un sous-groupe à un paramètre de $\mathrm{Aut}(D)$ ([[ch01-automorphismes-disque]]) ; ce sont exactement les $F(z)=\beta-\bar\beta z^2+i\theta z$ avec $\beta\in\C$, $\theta\in\R$.
