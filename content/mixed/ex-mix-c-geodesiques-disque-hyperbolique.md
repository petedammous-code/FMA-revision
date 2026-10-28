---
id: ex-mix-c-geodesiques-disque-hyperbolique
type: exercise
chapters: [8, 1, 7]
title: "Géodésiques du disque hyperbolique par Euler–Lagrange"
source: "Classique (géodésiques du disque de Poincaré, cf. Cartan, Berger–Gostiaux), prolongeant l'Exercice I.13.4 du poly ; traitement par Euler–Lagrange et Noether inventé"
difficulty: 3
time: 50
tools: [ch01-automorphismes-disque, ch01-c-derivable-ssi-df-c-lineaire, ch08-euler-lagrange, ch08-changement-de-variables, ch08-energie-conservee, ch08-noether, ch07-cauchy-lipschitz, ch07-unicite-globale]
---
## Énoncé

Soit $D=D(0,1)$. On identifie $\C$ à $\R^2$, muni du produit scalaire $\langle a,b\rangle=\Re(a\bar b)$. On considère le Lagrangien
$$
L:D\times\C\to\R,\qquad L(q,v)=\frac{|v|^2}{(1-|q|^2)^2},
$$
et, pour une courbe $\gamma:[t_0,t_1]\to D$ de classe $C^1$, sa longueur hyperbolique et son énergie
$$
\ell(\gamma)=\int_{t_0}^{t_1}\frac{|\gamma'(t)|}{1-|\gamma(t)|^2}\,dt,\qquad \mathcal E(\gamma)=\int_{t_0}^{t_1}L\big(\gamma(t),\gamma'(t)\big)\,dt .
$$
On appelle **géodésique** toute courbe $\gamma:J\to D$ de classe $C^2$, définie sur un intervalle ouvert $J$, qui vérifie l'équation d'Euler–Lagrange de $L$.

1. Soit $\varphi$ un automorphisme holomorphe de $D$. Montrer que $\dfrac{|\varphi'(z)|}{1-|\varphi(z)|^2}=\dfrac1{1-|z|^2}$ pour $z\in D$. En déduire que $\ell(\varphi\circ\gamma)=\ell(\gamma)$, $\mathcal E(\varphi\circ\gamma)=\mathcal E(\gamma)$, et que $\varphi$ transforme toute géodésique en une géodésique.
2. Montrer que $\gamma$ (de classe $C^2$) est une géodésique si et seulement si
$$
(1-|\gamma|^2)\,\gamma''+2\,\bar\gamma\,\gamma'^2=0 .
$$
Justifier que, pour $(t_0,q_0,v_0)\in\R\times D\times\C$, il existe une unique géodésique maximale $\gamma$ telle que $\gamma(t_0)=q_0$ et $\gamma'(t_0)=v_0$.
3. Montrer que, le long de toute géodésique, $\dfrac{|\gamma'|}{1-|\gamma|^2}$ et $J=\dfrac{\Im(\bar\gamma\gamma')}{(1-|\gamma|^2)^2}$ sont constantes. D'où vient la seconde ?
4. Montrer que, pour $\alpha,c\in\R$, $t\mapsto e^{i\alpha}\tanh(ct)$ est une géodésique définie sur $\R$. Déterminer toutes les géodésiques maximales passant par $0$.
5. Montrer que l'image de toute géodésique non constante est contenue dans un diamètre de $D$ ou dans un cercle orthogonal au cercle unité.
6. Soit $r\in[0,1[$. Montrer que tout chemin $\gamma:[0,1]\to D$ de classe $C^1$ tel que $\gamma(0)=0$ et $\gamma(1)=r$ vérifie $\ell(\gamma)\ge\operatorname{artanh} r$, et que cette borne est atteinte. En déduire, pour $z_1,z_2\in D$, la distance hyperbolique $d_{\mathrm{hyp}}(z_1,z_2)=\inf\ell(\gamma)$ (borne inférieure sur les chemins $C^1$ de $z_1$ à $z_2$) en fonction de $z_1,z_2$.

## Indices

### Indice 1
Question 1 : on connaît tous les automorphismes de $D$ ; calculer $1-|f_a(z)|^2$. Pour les géodésiques, il existe dans le cours un énoncé sur le comportement de l'équation d'Euler–Lagrange par changement de variables. Question 3 : deux lois de conservation du calcul des variations, l'une liée à l'indépendance en temps, l'autre à une symétrie.

### Indice 2
$1-|f_a(z)|^2=\dfrac{(1-|a|^2)(1-|z|^2)}{|1-\bar az|^2}$ et $f_a'(z)=\dfrac{1-|a|^2}{(1-\bar az)^2}$. Pour (E.L) : $\dfrac{\partial L}{\partial v}=\dfrac{2v}{(1-|q|^2)^2}$ et $\dfrac{\partial L}{\partial q}=\dfrac{4|v|^2q}{(1-|q|^2)^3}$ (vecteurs de $\R^2\simeq\C$). La symétrie : les rotations $q\mapsto e^{is}q$.

### Indice 3
Question 4 : unicité de la question 2, et invariance par translation du temps. Question 5 : ramener un point de la géodésique en $0$ par un automorphisme $f_{q_0}$, puis montrer que la famille des ensembles $\{z : A(1+|z|^2)-2\Re(\bar Bz)=0\}$ ($A\in\R$, $B\in\C$) est stable par les automorphismes $f_a$.

### Indice 4
Question 6 : avec $x=\Re\gamma$, on a $|\gamma'|\ge x'$ et $1-|\gamma|^2\le1-x^2$, et $\dfrac{x'}{1-x^2}$ est la dérivée de $\operatorname{artanh}x$.

## Corrigé

**1.** D'après [[ch01-automorphismes-disque]], $\varphi=\lambda f_a$ avec $|\lambda|=1$, $a\in D$ et $f_a(z)=\dfrac{z-a}{1-\bar az}$. On calcule
$$
f_a'(z)=\frac{(1-\bar az)+\bar a(z-a)}{(1-\bar az)^2}=\frac{1-|a|^2}{(1-\bar az)^2},\qquad 1-|f_a(z)|^2=\frac{|1-\bar az|^2-|z-a|^2}{|1-\bar az|^2}=\frac{(1-|a|^2)(1-|z|^2)}{|1-\bar az|^2},
$$
car $|1-\bar az|^2-|z-a|^2=1+|a|^2|z|^2-|z|^2-|a|^2=(1-|a|^2)(1-|z|^2)$. Le quotient donne $\dfrac{|f_a'(z)|}{1-|f_a(z)|^2}=\dfrac1{1-|z|^2}$, et la multiplication par $\lambda$ ne change ni $|\varphi'|$ ni $|\varphi|$.

$\varphi$ est holomorphe, donc $d\varphi_q(v)=\varphi'(q)\,v$ ([[ch01-c-derivable-ssi-df-c-lineaire]]) et $(\varphi\circ\gamma)'(t)=\varphi'(\gamma(t))\gamma'(t)$. Par conséquent
$$
L\big(\varphi(q),d\varphi_q(v)\big)=\frac{|\varphi'(q)|^2|v|^2}{(1-|\varphi(q)|^2)^2}=L(q,v)\qquad(q\in D,\ v\in\C),
$$
et de même pour l'intégrande de $\ell$ : les intégrandes de $\ell(\varphi\circ\gamma)$ et $\ell(\gamma)$ (resp. de $\mathcal E$) sont égales point par point.

*Géodésiques.* $\varphi$ est un $C^\infty$-difféomorphisme de $D$ (bijection holomorphe d'inverse holomorphe $\varphi^{-1}\in\mathrm{Aut}_{hol}(D)$). Soit $\gamma$ une géodésique et $\psi=\varphi^{-1}$. Le Lagrangien $L_1(q_1,v_1)=L(\psi(q_1),d\psi_{q_1}(v_1))$ est égal à $L$ par ce qui précède (appliqué à l'automorphisme $\psi$). La courbe $\beta=\psi\circ(\varphi\circ\gamma)=\gamma$ vérifie (E.L) pour $L$, donc par [[ch08-changement-de-variables]] (énoncé sur $[0;1]$, il s'applique sur tout segment de $J$ par changement affine de paramètre, (E.L) étant une égalité ponctuelle), $\varphi\circ\gamma$ vérifie (E.L) pour $L_1=L$ ; elle est $C^2$ comme composée. C'est une géodésique.

**2.** Notons $\rho(q)=(1-|q|^2)^{-2}$, de sorte que $L(q,v)=\rho(q)|v|^2$. Avec l'identification de $\R^2$ à son dual par le produit scalaire (cadre du chapitre VIII) : $\frac{\partial L}{\partial v}(q,v)\cdot k=2\rho(q)\langle v,k\rangle$ et $d\rho_q(k)=-2(1-|q|^2)^{-3}\cdot(-2\langle q,k\rangle)$, donc
$$
\frac{\partial L}{\partial v}(q,v)=\frac{2v}{(1-|q|^2)^2},\qquad\frac{\partial L}{\partial q}(q,v)=\frac{4|v|^2\,q}{(1-|q|^2)^3}.
$$
(C'est l'équation que vérifient les points critiques $C^1$ de $\hat L$ sur les courbes à extrémités fixées confinées dans $D$, [[ch08-euler-lagrange]], [[ch08-ouverture-courbes-confinees]].) Pour $\gamma$ de classe $C^2$, comme $\frac{d}{dt}|\gamma|^2=2\langle\gamma,\gamma'\rangle$, l'équation (E.L) s'écrit
$$
\frac{2\gamma''}{(1-|\gamma|^2)^2}+\frac{8\langle\gamma,\gamma'\rangle\,\gamma'}{(1-|\gamma|^2)^3}=\frac{4|\gamma'|^2\gamma}{(1-|\gamma|^2)^3}
\iff(1-|\gamma|^2)\gamma''+4\langle\gamma,\gamma'\rangle\gamma'-2|\gamma'|^2\gamma=0 .
$$
Or $2\langle\gamma,\gamma'\rangle=\gamma\bar\gamma'+\bar\gamma\gamma'$, donc $4\langle\gamma,\gamma'\rangle\gamma'-2|\gamma'|^2\gamma=2\gamma|\gamma'|^2+2\bar\gamma\gamma'^2-2|\gamma'|^2\gamma=2\bar\gamma\gamma'^2$, d'où l'équation annoncée (vérifiée aussi par calcul formel en coordonnées réelles).

*Existence et unicité.* L'équation équivaut à $\gamma''=\Phi(\gamma,\gamma')$ avec $\Phi(q,v)=-\dfrac{2\bar q\,v^2}{1-|q|^2}$, de classe $C^\infty$ sur l'ouvert $D\times\C$ de $\R^4$. Par réduction à l'ordre un ([[ch07-reduction-ordre-un]]), c'est le champ autonome $Y=(q,v)\mapsto(v,\Phi(q,v))$, de classe $C^1$ donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]). Le théorème de Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]) donnent une unique solution maximale ([[ch07-courbe-integrale-maximale-def]]) avec $\gamma(t_0)=q_0$, $\gamma'(t_0)=v_0$ ; elle est $C^\infty$. (Variante dans le langage du chapitre VIII : $\frac{\partial^2L}{\partial v^2}=2\rho(q)\langle\cdot,\cdot\rangle$ est non dégénérée, $L$ est régulier et [[ch08-existence-unicite-locale]] s'applique.)

**3.** *Énergie.* $L$ ne dépend pas du temps et $\frac{\partial L}{\partial v}(q,v)\cdot v=2\rho|v|^2$, donc $H=\frac{\partial L}{\partial v}\cdot v-L=\rho|v|^2=L$. Par [[ch08-energie-conservee]], $L(\gamma,\gamma')=\dfrac{|\gamma'|^2}{(1-|\gamma|^2)^2}$ est constante, donc aussi sa racine $\sigma=\dfrac{|\gamma'|}{1-|\gamma|^2}$ : une géodésique est parcourue à **vitesse hyperbolique constante**, et $\sigma=0$ si et seulement si $\gamma$ est constante.

*Moment.* Le champ $X(q)=iq$ sur $D$ a pour flot $F_s(q)=e^{is}q$, défini sur $\R\times D$ à valeurs dans $D$, avec $d(F_s)_q(v)=e^{is}v$, et $L(e^{is}q,e^{is}v)=L(q,v)$. Le théorème de Noether ([[ch08-noether]]) dit que
$$
Q=\frac{\partial L}{\partial v}(\gamma,\gamma')\cdot X(\gamma)=\Big\langle\frac{2\gamma'}{(1-|\gamma|^2)^2},\,i\gamma\Big\rangle=\frac{2\Re(-i\,\gamma'\bar\gamma)}{(1-|\gamma|^2)^2}=\frac{2\,\Im(\bar\gamma\gamma')}{(1-|\gamma|^2)^2}=2J
$$
est constante. C'est le **moment cinétique** associé à l'invariance par rotation : en polaire $\gamma=re^{i\theta}$ (là où $\gamma\neq0$), $\bar\gamma\gamma'=rr'+ir^2\theta'$ et $J=\dfrac{r^2\theta'}{(1-r^2)^2}$.

*Contrôle direct.* Avec $w=\bar\gamma\gamma'$ et l'équation, $w'=|\gamma'|^2+\bar\gamma\gamma''=|\gamma'|^2-\dfrac{2w^2}{1-|\gamma|^2}$, donc $\Im w'=-\dfrac{4\Re w\,\Im w}{1-|\gamma|^2}$, et
$$
J'=\frac{\Im w'}{(1-|\gamma|^2)^2}+\frac{\Im w\cdot4\Re w}{(1-|\gamma|^2)^3}=0 .
$$

**4.** Soit $T(t)=\tanh(ct)$ et $\delta=e^{i\alpha}T$ : $T'=c(1-T^2)$, $T''=-2cTT'=-2c^2T(1-T^2)$. Alors, $|\delta|=|T|<1$ et
$$
(1-|\delta|^2)\delta''+2\bar\delta\delta'^2=e^{i\alpha}\big[-2c^2T(1-T^2)^2+2Tc^2(1-T^2)^2\big]=0 :
$$
$\delta$ est une géodésique définie sur $\R$ (donc maximale).

*Géodésiques par $0$.* Soit $\gamma$ une géodésique maximale avec $\gamma(t_0)=0$, $\gamma'(t_0)=v_0$. Si $v_0=0$, la constante $0$ est solution, donc $\gamma\equiv0$ par unicité. Sinon $v_0=ce^{i\alpha}$ avec $c=|v_0|>0$, et $t\mapsto\delta(t-t_0)$ est une géodésique (l'équation est autonome) de mêmes conditions initiales $(0,ce^{i\alpha})$ en $t_0$. Par l'unicité de la question 2,
$$
\gamma(t)=e^{i\alpha}\tanh\big(|v_0|(t-t_0)\big)\qquad(t\in\R) :
$$
les géodésiques non constantes passant par $0$ sont les **diamètres**, parcourus à vitesse hyperbolique constante $|v_0|$ (cohérent avec $J=0$ puisque $\gamma(t_0)=0$).

**5.** Soit $\gamma:J\to D$ une géodésique non constante, $t_0\in J$, $q_0=\gamma(t_0)$, et $\varphi=f_{q_0}$, qui vérifie $\varphi(q_0)=0$. Par 1, $\varphi\circ\gamma$ est une géodésique (non constante, $\varphi$ étant injective) passant par $0$ en $t_0$ ; par 4, $\varphi\circ\gamma(J)\subset\Delta_\alpha=e^{i\alpha}\,]-1,1[$ pour un $\alpha$. Donc $\gamma(J)\subset f_{q_0}^{-1}(\Delta_\alpha)=f_{-q_0}(\Delta_\alpha)$ (on vérifie $f_{q_0}^{-1}(w)=\frac{w+q_0}{1+\bar q_0w}=f_{-q_0}(w)$).

*Une famille stable.* Pour $(A,B)\in\R\times\C$ non nul, soit $\mathcal C_{A,B}=\{z\in\C : A(1+|z|^2)-2\Re(\bar Bz)=0\}$.
* Si $A=0$ : $\mathcal C_{0,B}$ est la droite $\{\Re(\bar Bz)=0\}=iB\,\R$, qui passe par $0$ ; $\Delta_\alpha=\mathcal C_{0,ie^{i\alpha}}\cap D$.
* Si $A\neq0$ : en divisant par $A$, $|z-B/A|^2=|B/A|^2-1$ : si $|B|>|A|$, c'est le cercle de centre $\omega=B/A$ et de rayon $R$ avec $|\omega|^2=1+R^2$ ; par Pythagore, en un point d'intersection $m$ avec $C(0,1)$, les rayons $[0,m]$ et $[\omega,m]$ sont orthogonaux, donc les deux cercles se coupent à angle droit : **cercle orthogonal à $C(0,1)$**. Si $|B|\le|A|$, $\mathcal C_{A,B}$ est vide ou réduit à un point.

Soit $a\in D$ et $z=f_{-a}(w)=\frac{w+a}{1+\bar aw}$ ($w\in D$). On a $1+|z|^2=\dfrac{(1+|a|^2)(1+|w|^2)+4\Re(\bar aw)}{|1+\bar aw|^2}$ et $z\,|1+\bar aw|^2=(w+a)(1+a\bar w)=a(1+|w|^2)+w+a^2\bar w$, avec $\Re(\bar Ba^2\bar w)=\Re(B\bar a^2w)$, d'où
$$
|1+\bar aw|^2\big[A(1+|z|^2)-2\Re(\bar Bz)\big]=A'(1+|w|^2)-2\Re(\bar B'w),
$$
$$
A'=A(1+|a|^2)-2\Re(\bar Ba),\qquad \bar B'=\bar B+B\bar a^2-2A\bar a
$$
(identité polynomiale vérifiée par calcul formel). Ainsi $f_{-a}(w)\in\mathcal C_{A,B}\iff w\in\mathcal C_{A',B'}$ pour $w\in D$, c'est-à-dire, $f_{-a}$ étant une bijection de $D$ d'inverse $f_a$ : $f_{-a}^{-1}(\mathcal C_{A,B}\cap D)=f_a(\mathcal C_{A,B}\cap D)=\mathcal C_{A',B'}\cap D$, pour tout $a\in D$. Avec $a=-q_0$ et $(A,B)=(0,ie^{i\alpha})$, on obtient $f_{-q_0}(\Delta_\alpha)=\mathcal C_{A',B'}\cap D$. Ce couple est non nul (sinon $\mathcal C_{A',B'}\cap D=D$, alors que $f_{-q_0}(\Delta_\alpha)\neq D$ puisque $\Delta_\alpha\neq D$), et $\mathcal C_{A',B'}$ contient une courbe non constante, donc n'est ni vide ni un point : c'est une droite par $0$ (un diamètre une fois intersectée avec $D$) ou un cercle orthogonal à $C(0,1)$.

Conclusion : l'image de $\gamma$ est contenue dans un diamètre ou dans un arc de cercle orthogonal au cercle unité. (Vérification numérique : une géodésique intégrée depuis $\gamma(0)=0{,}3+0{,}2i$, $\gamma'(0)=0{,}5-0{,}7i$ reste sur un cercle à $10^{-13}$ près, de centre $\omega$ et rayon $R$ avec $|\omega|^2-R^2=1$ à $10^{-12}$ près.)

**6.** Soit $\gamma$ un tel chemin et $x=\Re\gamma$, de classe $C^1$, à valeurs dans $]-1,1[$. Pour tout $t$, $|\gamma'(t)|\ge|x'(t)|\ge x'(t)$ et $0<1-|\gamma(t)|^2\le1-x(t)^2$. Donc
$$
\ell(\gamma)\ge\int_0^1\frac{x'(t)}{1-x(t)^2}\,dt=\operatorname{artanh}x(1)-\operatorname{artanh}x(0)=\operatorname{artanh}r .
$$
Pour le segment $\gamma_0(t)=rt$ : $\ell(\gamma_0)=\int_0^1\frac{r\,dt}{1-r^2t^2}=\operatorname{artanh}r$. Donc $d_{\mathrm{hyp}}(0,r)=\operatorname{artanh}r=\frac12\ln\frac{1+r}{1-r}$, réalisée par un morceau de géodésique (question 4).

*Cas général.* Soient $z_1,z_2\in D$ et $\psi=e^{i\theta}f_{z_1}$, où $\theta$ est choisi pour que $\psi(z_2)=|f_{z_1}(z_2)|=:r\in[0,1[$, et $\psi(z_1)=0$. L'application $\gamma\mapsto\psi\circ\gamma$ est une bijection des chemins $C^1$ de $z_1$ à $z_2$ sur ceux de $0$ à $r$ (d'inverse $\beta\mapsto\psi^{-1}\circ\beta$), qui conserve $\ell$ (question 1). Donc
$$
d_{\mathrm{hyp}}(z_1,z_2)=d_{\mathrm{hyp}}(0,r)=\operatorname{artanh}\left|\frac{z_2-z_1}{1-\bar z_1z_2}\right| .
$$
On retrouve en particulier l'invariance de $d_{\mathrm{hyp}}$ par $\mathrm{Aut}_{hol}(D)$ (poly, Exercice I.13.4, p. 32-33), et le fait que les arcs de géodésiques réalisent la distance.

## Pièges et variantes

* **Longueur ou énergie ?** $\ell$ est invariante par reparamétrage, donc son équation d'Euler–Lagrange est dégénérée (toute reparamétrisation d'une solution est solution, et $\frac{\partial^2}{\partial v^2}\frac{|v|}{1-|q|^2}$ n'est pas inversible) ; on travaille avec l'énergie $\mathcal E$, dont le Lagrangien est régulier, et l'on obtient des géodésiques à vitesse constante.
* **Identification gradient / vecteur** : $\frac{\partial L}{\partial q}$ est un vecteur de $\R^2\simeq\C$ via $\langle a,b\rangle=\Re(a\bar b)$ ; oublier le facteur $2$ dans $d|q|^2=2\langle q,\cdot\rangle$ fausse l'équation (on obtiendrait un coefficient autre que $2$ devant $\bar\gamma\gamma'^2$, et $\tanh$ ne serait plus solution).
* **Noether** demande un flot défini pour **tout** $s\in\R$ sur l'ouvert $D$ : c'est le cas des rotations, pas des automorphismes $f_a$ pris un à un (qui ne forment pas un flot) ; ces derniers servent via le changement de variables, pas via Noether.
* Variante (métrique sphérique) : $L(q,v)=\dfrac{|v|^2}{(1+|q|^2)^2}$ sur $\C$ ; l'équation devient $(1+|\gamma|^2)\gamma''-2\bar\gamma\gamma'^2=0$, $t\mapsto e^{i\alpha}\tan(ct)$ est solution (avec explosion en temps fini : on « passe par $\infty$ »), et les géodésiques sont les projections stéréographiques des grands cercles.
* Variante : montrer que deux points distincts de $D$ sont joints par une **unique** géodésique (à reparamétrage affine près) : se ramener à $0$ et $r>0$ par un automorphisme.
