---
id: ex-ch02-projecteur-spectral-riesz
type: exercise
chapters: [2, 5]
title: Compter et suivre des valeurs propres par une intégrale de contour
source: "Inventé (autour du projecteur spectral de Riesz, outil classique de la théorie des perturbations)"
difficulty: 3
time: 50
tools: [ch02-principe-argument-domaine, ch02-indice-cercle, ch02-residu-pole-simple, ch02-formule-residus-pratique, ch05-inversion-c-infini, ch01-holomorphie-sous-integrale, ch01-integrale-primitive]
---
## Énoncé

Soit $n\ge1$. On munit $\mathrm M_n(\C)$ d'une norme $\norm{\cdot}$ (toutes sont équivalentes). Pour $A\in\mathrm M_n(\C)$, on note $\chi_A(z)=\det(zI_n-A)$ son polynôme caractéristique (unitaire de degré $n$) ; ses racines sont les valeurs propres de $A$, et la **multiplicité algébrique** d'une valeur propre est sa multiplicité comme racine de $\chi_A$.

On fixe $z_0\in\C$, $r>0$, on note $D=D(z_0,r)$ et $\Gamma=C(z_0,r)$ le cercle parcouru une fois dans le sens direct. On pose
$$
\mathcal U=\{A\in\mathrm M_n(\C)\ :\ A \text{ n'a aucune valeur propre sur } \Gamma\}.
$$
Pour $A\in\mathcal U$ et $z\in\C$ qui n'est pas valeur propre de $A$, on note $R_A(z)=(zI_n-A)^{-1}$, et on définit (intégrale coefficient par coefficient)
$$
P(A)=\frac{1}{2i\pi}\int_\Gamma R_A(z)\,dz\ \in\mathrm M_n(\C),
$$
ainsi que $N(A)$ = nombre de valeurs propres de $A$ dans $D$, comptées avec multiplicité algébrique.

1. Montrer que $\mathcal U$ est un ouvert de $\mathrm M_n(\C)$ et que, pour $A\in\mathcal U$, chaque coefficient de $R_A(z)$ est une fraction rationnelle en $z$ dont les pôles sont des valeurs propres de $A$ (en particulier $P(A)$ est bien défini).
2. (a) Montrer que $\mathrm{tr}\,R_A(z)=\dfrac{\chi_A'(z)}{\chi_A(z)}$ pour tout $z$ qui n'est pas valeur propre de $A$.
   (b) En déduire que $\mathrm{tr}\,P(A)=N(A)$ pour tout $A\in\mathcal U$.
3. Montrer que $A\mapsto P(A)$ est continue sur $\mathcal U$. En déduire que $N$ est localement constante sur $\mathcal U$.
4. Soit $A_0\in\mathcal U$ ayant une unique valeur propre $\lambda_0$ dans $D$, et supposons-la simple. Montrer qu'il existe un voisinage ouvert $\mathcal V\subset\mathcal U$ de $A_0$ tel que toute $A\in\mathcal V$ ait une unique valeur propre $\lambda(A)$ dans $D$, simple, et que
$$
\lambda(A)=\frac{1}{2i\pi}\int_\Gamma \frac{z\,\chi_A'(z)}{\chi_A(z)}\,dz=\mathrm{tr}\big(A\,P(A)\big).
$$
5. Soit $H\in\mathrm M_n(\C)$. Montrer qu'il existe $\delta>0$ tel que $t\mapsto\lambda(A_0+tH)$ soit définie et holomorphe sur $D(0,\delta)$, et que
$$
\frac{d}{dt}\Big|_{t=0}\lambda(A_0+tH)=\mathrm{tr}\big(H\,P(A_0)\big).
$$
6. Application : $n=2$, $A_0=\begin{pmatrix}1&1\\0&2\end{pmatrix}$, $\Gamma=C(1,\tfrac12)$. Calculer $P(A_0)$, vérifier que c'est un projecteur, et donner le développement $\lambda(A_0+tH)=1+c\,t+O(t^2)$ pour $H=(h_{ij})$ quelconque.

## Indices

### Indice 1
Tout se ramène à des fonctions **scalaires** : la trace de $R_A(z)$ est une dérivée logarithmique, et intégrer une dérivée logarithmique sur un cercle compte des zéros. Pour la continuité, c'est une intégrale à paramètre sur un compact.

### Indice 2
2(a) : trigonaliser $A=QTQ^{-1}$ ; $(zI_n-T)^{-1}$ est triangulaire de diagonale $\frac{1}{z-\lambda_j}$. 2(b) : principe de l'argument pour $\chi_A$ sur $D$ (ou indices $\mathrm{Ind}_{\lambda_j}(\Gamma)\in\{0,1\}$). 3 : continuité uniforme sur $K\times[0,2\pi]$ avec $K$ boule fermée contenue dans $\mathcal U$, puis « continue à valeurs entières ⇒ localement constante ».

### Indice 3
4 : $\mathrm{tr}(AR_A(z))=z\,\mathrm{tr}R_A(z)-n$. 5 : holomorphie sous le signe intégrale en $t$ ; la dérivée de $t\mapsto(zI_n-A_0-tH)^{-1}$ en $0$ est $R_{A_0}(z)HR_{A_0}(z)$ (différentielle de l'inversion) ; enfin $zR^2=R+A_0R^2$ et $R^2=-\frac{d}{dz}R$ a une primitive.

## Corrigé

**1.** *Ouverture.* L'application $(A,z)\mapsto\chi_A(z)$ est polynomiale en les coefficients de $A$ et en $z$, donc continue sur $\mathrm M_n(\C)\times\C$. Soit $A_0\in\mathcal U$ et supposons par l'absurde qu'il existe $A_k\to A_0$ et $z_k\in\Gamma$ avec $\chi_{A_k}(z_k)=0$. Le cercle $\Gamma$ est compact : quitte à extraire, $z_k\to z^*\in\Gamma$, et par continuité $\chi_{A_0}(z^*)=0$, ce qui contredit $A_0\in\mathcal U$. Donc une boule centrée en $A_0$ est contenue dans $\mathcal U$ : $\mathcal U$ est ouvert.

*Coefficients.* Si $z$ n'est pas valeur propre, $\chi_A(z)\ne0$ et la formule de la comatrice donne $R_A(z)=\frac{1}{\chi_A(z)}\,{}^t\mathrm{com}(zI_n-A)$ : chaque coefficient est un polynôme en $z$ divisé par $\chi_A(z)$, donc une fraction rationnelle dont les pôles sont parmi les zéros de $\chi_A$, c'est-à-dire parmi les valeurs propres. Pour $A\in\mathcal U$, ces coefficients sont continus sur $\Gamma$, et $P(A)$ est bien défini.

**2.** (a) Sur $\C$, $A$ est trigonalisable : $A=QTQ^{-1}$ avec $T$ triangulaire supérieure de diagonale $\lambda_1,\dots,\lambda_n$ (les valeurs propres répétées selon leur multiplicité algébrique), et $\chi_A(z)=\chi_T(z)=\prod_{j=1}^n(z-\lambda_j)$. Alors $zI_n-A=Q(zI_n-T)Q^{-1}$, donc $R_A(z)=Q(zI_n-T)^{-1}Q^{-1}$. L'inverse de la matrice triangulaire $zI_n-T$ est triangulaire, de diagonale $\frac{1}{z-\lambda_j}$. Par invariance de la trace par conjugaison,
$$
\mathrm{tr}\,R_A(z)=\sum_{j=1}^n\frac{1}{z-\lambda_j}=\frac{\chi_A'(z)}{\chi_A(z)},
$$
la dernière égalité étant la dérivée logarithmique d'un produit.

(b) La trace est linéaire et l'intégrale est prise coefficient par coefficient, donc $\mathrm{tr}\,P(A)=\frac{1}{2i\pi}\int_\Gamma\frac{\chi_A'(z)}{\chi_A(z)}\,dz$. On applique le principe de l'argument pour le bord d'un domaine ([[ch02-principe-argument-domaine]]) à $g=\chi_A$ : $g$ est un polynôme non nul, donc méromorphe sur $\Omega=\C$ sans pôle ; $U=D$ vérifie $\bar U\subset\Omega$ ; le bord $\Gamma$ est un lacet orienté positivement qui ne contient aucun zéro de $g$ (car $A\in\mathcal U$). Donc
$$
\mathrm{tr}\,P(A)=Z(\chi_A,D)-P(\chi_A,D)=Z(\chi_A,D)-0=N(A).
$$
(Vérification directe : $\frac{1}{2i\pi}\int_\Gamma\sum_j\frac{dz}{z-\lambda_j}=\sum_j\mathrm{Ind}_{\lambda_j}(\Gamma)$, et $\mathrm{Ind}_{\lambda}(\Gamma)$ vaut $1$ si $\lambda\in D$ et $0$ si $|\lambda-z_0|>r$, [[ch02-indice-cercle]].)

**3.** Paramétrons $\Gamma$ par $\gamma(\theta)=z_0+re^{i\theta}$ : $P(A)=\frac1{2i\pi}\int_0^{2\pi}\big(\gamma(\theta)I_n-A\big)^{-1}\gamma'(\theta)\,d\theta$. Soit $A_0\in\mathcal U$ et $K=\bar B(A_0,\rho)$ une boule fermée contenue dans l'ouvert $\mathcal U$ (question 1) ; $K$ est compacte (dimension finie). L'application $(A,\theta)\mapsto(\gamma(\theta)I_n-A)^{-1}\gamma'(\theta)$ est continue sur $K\times[0,2\pi]$, comme composée d'applications continues, l'inversion étant continue (même $C^\infty$) sur l'ouvert des matrices inversibles ([[ch05-inversion-c-infini]]). Par le théorème de Heine elle y est uniformément continue : pour $\eps>0$ il existe $\eta>0$ tel que, pour $A,A'\in K$ avec $\norm{A-A'}<\eta$, l'écart des intégrandes soit $\le\eps$ pour tout $\theta$. Alors, puisque la norme de l'intégrale d'une fonction continue est majorée par l'intégrale de sa norme, $\norm{P(A)-P(A')}\le\frac{1}{2\pi}\cdot2\pi\eps=\eps$. Donc $P$ est continue sur $\mathcal U$.

La trace étant linéaire (donc continue), $N=\mathrm{tr}\circ P$ est continue sur $\mathcal U$ et à valeurs dans $\N$. Pour $A_0\in\mathcal U$, il existe un voisinage de $A_0$ sur lequel $|N(A)-N(A_0)|<1$, donc $N(A)=N(A_0)$ : $N$ est localement constante. (Interprétation : une valeur propre ne peut entrer dans $D$ ou en sortir qu'en traversant $\Gamma$.)

**4.** On a $N(A_0)=1$. D'après 3, il existe un voisinage ouvert $\mathcal V\subset\mathcal U$ de $A_0$ sur lequel $N\equiv1$ : toute $A\in\mathcal V$ a, dans $D$, une seule valeur propre comptée avec multiplicité, donc une unique valeur propre $\lambda(A)$, et elle est simple.

*Première égalité.* La fonction $F(z)=\frac{z\,\chi_A'(z)}{\chi_A(z)}=\sum_{j}\frac{z}{z-\lambda_j}$ est méromorphe sur $\C$, sans pôle sur $\Gamma$, et son seul pôle dans $D$ est $\lambda(A)$. Comme $\lambda(A)$ est un zéro simple de $\chi_A$, on écrit $\chi_A(z)=(z-\lambda(A))h(z)$ avec $h$ polynomiale, $h(\lambda(A))\ne0$ ; alors $\frac{\chi_A'}{\chi_A}=\frac{1}{z-\lambda(A)}+\frac{h'}{h}$ a un pôle simple de résidu $1$ en $\lambda(A)$, et ([[ch02-residu-pole-simple]], avec la fonction holomorphe $z\mapsto z$) $\mathrm{res}_{\lambda(A)}(F)=\lambda(A)\cdot1$. La formule des résidus pour le bord du disque ([[ch02-formule-residus-pratique]], $\Omega=\C$ simplement connexe) donne $\frac{1}{2i\pi}\int_\Gamma F(z)\,dz=\lambda(A)$.

*Seconde égalité.* $AR_A(z)=\big(A-zI_n+zI_n\big)R_A(z)=-I_n+zR_A(z)$, donc, avec 2(a), $\mathrm{tr}\big(AR_A(z)\big)=-n+z\frac{\chi_A'(z)}{\chi_A(z)}$. En intégrant ($A$ est constante et sort de l'intégrale, $\int_\Gamma dz=0$) :
$$
\mathrm{tr}\big(AP(A)\big)=\frac{1}{2i\pi}\int_\Gamma\mathrm{tr}\big(AR_A(z)\big)\,dz=-\frac{n}{2i\pi}\int_\Gamma dz+\frac1{2i\pi}\int_\Gamma\frac{z\chi_A'(z)}{\chi_A(z)}\,dz=\lambda(A).
$$

**5.** *Définition.* $\mathcal V$ est un voisinage de $A_0$ : il contient une boule $B(A_0,\rho)$. Si $H=0$ il n'y a rien à montrer ; sinon $\delta=\rho/\norm H$ convient : $A_0+tH\in\mathcal V$ pour $|t|<\delta$, et $\lambda(t):=\lambda(A_0+tH)$ est défini.

*Holomorphie.* D'après 4, $\lambda(t)=\frac{1}{2i\pi}\int_0^{2\pi}\Phi(t,\theta)\,d\theta$ avec $\Phi(t,\theta)=\gamma(\theta)\,\mathrm{tr}\big((\gamma(\theta)I_n-A_0-tH)^{-1}\big)\gamma'(\theta)$. On vérifie les hypothèses de l'holomorphie sous le signe intégrale ([[ch01-holomorphie-sous-integrale]]) sur $D(0,\delta)\times[0,2\pi]$ : (i) $\Phi$ est continue, donc mesurable ; pour $\theta$ fixé, $t\mapsto\Phi(t,\theta)$ est une fraction rationnelle en $t$ (comatrice) dont le dénominateur $\det(\gamma(\theta)I_n-A_0-tH)$ ne s'annule pas sur $D(0,\delta)$ (car $A_0+tH\in\mathcal U$), donc elle est holomorphe ; (ii) pour $t_1\in D(0,\delta)$, on choisit $r_1>0$ avec $\bar D(t_1,r_1)\subset D(0,\delta)$ : $\Phi$ est continue sur le compact $\bar D(t_1,r_1)\times[0,2\pi]$, donc bornée par une constante $M$, intégrable sur $[0,2\pi]$. Donc $\lambda$ est holomorphe sur $D(0,\delta)$ et $\lambda'(t)=\frac1{2i\pi}\int_0^{2\pi}\partial_t\Phi(t,\theta)\,d\theta$.

*Dérivée.* Pour $z\in\Gamma$ fixé, $t\mapsto M(t)=zI_n-A_0-tH$ est affine de dérivée $-H$, et la différentielle de l'inversion est $d\Psi_M(K)=-M^{-1}KM^{-1}$ ([[ch05-inversion-c-infini]]). Par la règle de la chaîne, $\frac{d}{dt}M(t)^{-1}=M(t)^{-1}HM(t)^{-1}$ (la dérivée complexe d'une fonction holomorphe coïncide avec sa dérivée dans la direction réelle), qui vaut $R(z)HR(z)$ en $t=0$, avec $R=R_{A_0}$. Par linéarité de la trace et $\mathrm{tr}(RHR)=\mathrm{tr}(HR^2)$ :
$$
\lambda'(0)=\frac{1}{2i\pi}\int_\Gamma z\,\mathrm{tr}\big(R(z)HR(z)\big)\,dz=\mathrm{tr}\Big(H\cdot\frac1{2i\pi}\int_\Gamma zR(z)^2\,dz\Big).
$$
Or $zR^2=(zI_n-A_0+A_0)R^2=R+A_0R^2$. De plus, sur l'ouvert $\C\setminus\mathrm{Sp}(A_0)$ qui contient $\Gamma$, $z\mapsto R(z)$ est holomorphe (coefficients rationnels) et, par la même règle de dérivation de l'inverse, $\frac{d}{dz}R(z)=-R(z)^2$ : chaque coefficient de $R^2$ admet une primitive holomorphe, donc $\int_\Gamma R(z)^2\,dz=0$ ([[ch01-integrale-primitive]]). Il reste $\frac1{2i\pi}\int_\Gamma zR(z)^2\,dz=P(A_0)$ et
$$
\lambda'(0)=\mathrm{tr}\big(H\,P(A_0)\big).
$$

**6.** Les valeurs propres de $A_0$ sont $1\in D(1,\frac12)$ (simple) et $2$, extérieure au disque fermé : $A_0\in\mathcal U$ et la question 4 s'applique. On calcule
$$
R_{A_0}(z)=\begin{pmatrix}z-1&-1\\0&z-2\end{pmatrix}^{-1}=\begin{pmatrix}\dfrac{1}{z-1}&\dfrac{1}{(z-1)(z-2)}\\0&\dfrac1{z-2}\end{pmatrix}.
$$
Coefficient par coefficient (formule des résidus sur $D(1,\frac12)$, seul le point $1$ est intérieur) : $\frac1{2i\pi}\int_\Gamma\frac{dz}{z-1}=1$, $\frac1{2i\pi}\int_\Gamma\frac{dz}{(z-1)(z-2)}=\mathrm{res}_1=\frac{1}{1-2}=-1$, $\frac{1}{2i\pi}\int_\Gamma\frac{dz}{z-2}=0$. Donc
$$
P(A_0)=\begin{pmatrix}1&-1\\0&0\end{pmatrix},\qquad P(A_0)^2=P(A_0),\qquad \mathrm{tr}\,P(A_0)=1=N(A_0).
$$
C'est le projecteur sur la droite propre $\C e_1$ (valeur propre $1$) parallèlement à la droite propre $\C(1,1)$ (valeur propre $2$). Enfin $HP(A_0)=\begin{pmatrix}h_{11}&-h_{11}\\h_{21}&-h_{21}\end{pmatrix}$, d'où
$$
\lambda(A_0+tH)=1+(h_{11}-h_{21})\,t+O(t^2).
$$
Contrôle : pour $H=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, $\chi(z)=(z-1)(z-2)-t$ et la racine proche de $1$ est $\frac{3-\sqrt{1+4t}}{2}=1-t+O(t^2)$ ; le cas général a été vérifié numériquement.

## Pièges et variantes

* En 2(b), oublier de vérifier qu'aucune valeur propre n'est **sur** $\Gamma$ : c'est exactement la condition $A\in\mathcal U$, sans laquelle l'intégrale n'est pas définie.
* En 3, « $N$ continue » n'a de sens que parce que $N=\mathrm{tr}\,P$ : la conclusion « localement constante » vient de ce que $N$ est **à valeurs entières**. Sur tout $\mathrm M_n(\C)$, $N$ n'est pas localement constante (elle saute quand une valeur propre traverse $\Gamma$) : l'ouvert $\mathcal U$ est essentiel.
* En 4, ne pas confondre multiplicité algébrique et géométrique : $N(A)=1$ garantit une racine **simple** de $\chi_A$, ce qui est l'hypothèse du calcul de résidu.
* En 5, la formule $\lambda'(0)=\mathrm{tr}(HP(A_0))$ redonne la formule classique $\lambda'(0)=\frac{w^{\mathsf T}Hv}{w^{\mathsf T}v}$ avec $v$ vecteur propre à droite et $w$ à gauche, car alors $P(A_0)=\frac{vw^{\mathsf T}}{w^{\mathsf T}v}$.
* Comparaison avec le calcul différentiel : le théorème des fonctions implicites appliqué à $(A,\lambda)\mapsto\chi_A(\lambda)$ donne que $\lambda$ est $C^\infty$ près de $A_0$ (Exercice VI.4.7 du poly, p. 124, [[ch06-valeurs-propres-simples-lisses]]) ; la méthode des résidus donne en plus un voisinage explicite (tout $\mathcal V$ où $N=1$), une formule close et l'holomorphie.
* Variante : on peut montrer que $P(A)$ est toujours un projecteur qui commute avec $A$ (projecteur de Riesz sur la somme des sous-espaces caractéristiques des valeurs propres situées dans $D$) ; pour $A$ diagonalisable, $A=Q\,\mathrm{diag}(\lambda_j)Q^{-1}$, c'est immédiat : $P(A)=Q\,\mathrm{diag}(\eps_j)Q^{-1}$ avec $\eps_j=\mathrm{Ind}_{\lambda_j}(\Gamma)\in\{0,1\}$.
