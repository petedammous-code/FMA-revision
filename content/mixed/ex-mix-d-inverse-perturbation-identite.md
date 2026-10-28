---
id: ex-mix-d-inverse-perturbation-identite
type: exercise
chapters: [1, 2, 5, 6]
title: Inverser une perturbation holomorphe de l'identité, en fonction de la perturbation
source: "Inventé (mécanisme classique de « perte de domaine » compensée par les estimées de Cauchy, comme dans les méthodes de Newton–KAM)"
difficulty: 3
time: 50
tools: [ch01-estimees-cauchy, ch02-rouche, ch02-formule-residus, ch02-residu-pole-simple, ch01-integrale-chemin-parametre, ch05-taylor-lagrange-1d, ch05-differentielle-def, ch06-point-fixe-parametre-cp, ch06-differentiable-sur-partie-def]
---
## Énoncé

Pour $r>0$, on note $E_r$ l'espace des fonctions holomorphes **bornées** sur $D(0,r)$, muni de la norme $\norm u_r=\sup_{D(0,r)}|u|$ ; on admet que $(E_r,\norm\cdot_r)$ est un espace de Banach. On note $\id$ la fonction $z\mapsto z$ et
$$
\mathcal U=\Big\{\varphi\in E_1 :\ \norm\varphi_1<\tfrac14\Big\}.
$$
Pour $\varphi\in\mathcal U$, on pose $f=\id+\varphi$, c'est-à-dire $f(z)=z+\varphi(z)$ pour $z\in D(0,1)$.

1. Soient $\varphi\in E_1$ et $0<s<1$. Montrer que, pour tout $z\in D(0,s)$,
$$
|\varphi'(z)|\le\frac{\norm\varphi_1}{1-s},\qquad|\varphi''(z)|\le\frac{2\norm\varphi_1}{(1-s)^2},
$$
et que $\varphi$ est $\frac{\norm\varphi_1}{1-s}$-lipschitzienne sur $D(0,s)$.
2. Soit $\varphi\in\mathcal U$. Montrer que, pour tout $w\in D(0,\frac12)$, l'équation $f(z)=w$ possède exactement une solution $z\in D(0,\frac34)$, notée $g(w)$, que c'est un zéro simple de $f-w$, et que $|g(w)-w|\le\norm\varphi_1$.
3. Montrer que $g$ est holomorphe sur $D(0,\frac12)$. En déduire que $\psi:=g-\id$ appartient à $E_{1/2}$, que $\norm\psi_{1/2}\le\norm\varphi_1$ et que
$$
\psi=-\varphi\circ(\id+\psi)\qquad\text{sur }D(0,\tfrac12).
$$
Montrer enfin que $\psi$ est le seul $\chi\in E_{1/2}$ tel que $\norm\chi_{1/2}\le\frac14$ et $\chi=-\varphi\circ(\id+\chi)$.
4. On note $I:\mathcal U\to E_{1/2}$ l'application $\varphi\mapsto\psi=g-\id$.
   a) Soit $\mathcal O=\{\chi\in E_{1/2} : \norm\chi_{1/2}<\frac38\}$. Montrer que $C(\varphi,\chi)=\varphi\circ(\id+\chi)$ définit une application $C:E_1\times\mathcal O\to E_{1/2}$ de classe $C^1$, et calculer sa différentielle.
   b) Montrer que $I$ est de classe $C^1$ sur $\mathcal U$ et que, pour $h\in E_1$,
$$
dI_\varphi(h)=-\,g'\cdot(h\circ g).
$$
   Que vaut $dI_0$ ? Interpréter.
5. *Exemple.* Pour $0<\eps<\frac14$, on prend $\varphi_\eps(z)=\eps z^2$. Calculer $g$ explicitement, donner le développement de $I(\varphi_\eps)$ à l'ordre $2$ en $\eps$, et vérifier la formule du 4 b) en calculant directement $\frac{d}{d\eps}\big(I(\varphi_\eps)\big)(w)$.

## Indices

### Indice 1
Les questions 1 à 3 portent sur **une** fonction $\varphi$ fixée : contrôler des dérivées par un sup (avec perte de rayon), compter des solutions sans les calculer, représenter une solution par une intégrale de contour. La question 4 est un problème de **point fixe dépendant d'un paramètre**, le paramètre étant la fonction $\varphi$ elle-même.

### Indice 2
1 : estimées de Cauchy sur le disque $\bar D(z,1-s)$. 2 : théorème de Rouché sur $C(0,\frac34)$ en comparant $f-w$ à $z-w$. 3 : le résidu de $z\mapsto\frac{zf'(z)}{f(z)-w}$ en un zéro simple $z_1$ de $f-w$ vaut $z_1$. 4 b) : théorème du point fixe à paramètre II, appliqué à $G(\varphi,\chi)=-\varphi\circ(\id+\chi)$ sur $\Lambda\times X$, avec $\Lambda=B_{E_1}(0,\eps_0)$ et $X=\bar B_{E_{1/2}}(0,\eps_0)$, $\eps_0<\frac14$.

### Indice 3
4 a) : pour $\chi\in\mathcal O$ et $|z|<\frac12$, $|z+\chi(z)|<\frac78$, et sur $D(0,\frac78)$ la question 1 donne $|\varphi'|\le8\norm\varphi_1$, $|\varphi''|\le128\norm\varphi_1$. Écrire
$$
C(\varphi+h,\chi+k)-C(\varphi,\chi)=\big[h\circ(\id+\chi+k)\big]+\big[\varphi\circ(\id+\chi+k)-\varphi\circ(\id+\chi)\big]
$$
et utiliser Taylor–Lagrange à l'ordre $2$ sur $t\mapsto\varphi(w+tu)$. 4 b) : la constante de contraction est $a=\frac{\eps_0}{1/2-\eps_0}$.

### Indice 4
5 : $g$ est la racine de $\eps z^2+z-w=0$ qui tend vers $w$ quand $\eps\to0$. Dériver la relation $\eps g^2+g=w$ par rapport à $\eps$ puis par rapport à $w$.

## Corrigé

**1.** Soit $z\in D(0,s)$. Le disque fermé $\bar D(z,1-s)$ est contenu dans $D(0,1)$ (car $|z|+(1-s)<1$), donc $1-s<\rho(z)=\sup\{r : \bar D(z,r)\subset D(0,1)\}$ et les estimées de Cauchy ([[ch01-estimees-cauchy]]) sur le cercle $C(z,1-s)$, où $|\varphi|\le\norm\varphi_1$, donnent
$$
|\varphi'(z)|\le\frac{\norm\varphi_1}{1-s},\qquad\frac{|\varphi''(z)|}{2!}\le\frac{\norm\varphi_1}{(1-s)^2}.
$$
Pour $z_1,z_2\in D(0,s)$, le segment $[z_1,z_2]$ est dans le disque convexe $D(0,s)$ ; $\varphi$ est une primitive holomorphe de $\varphi'$, donc ([[ch01-integrale-primitive]], [[ch01-longueur-majoration-integrale]])
$$
|\varphi(z_2)-\varphi(z_1)|=\Big|\int_{[z_1,z_2]}\varphi'(\zeta)\,d\zeta\Big|\le\sup_{D(0,s)}|\varphi'|\cdot|z_2-z_1|\le\frac{\norm\varphi_1}{1-s}\,|z_2-z_1| .
$$

**2.** Fixons $w\in D(0,\frac12)$ et notons $\delta=\norm\varphi_1<\frac14$. On applique le théorème de Rouché ([[ch02-rouche]]) sur $\Omega=D(0,1)$, $U=D(0,\frac34)$ (donc $\bar U\subset\Omega$, bord $\Gamma=C(0,\frac34)$ orienté positivement), aux fonctions holomorphes $F(z)=f(z)-w$ et $G(z)=z-w$. Pour $|z|=\frac34$ :
$$
|G(z)|\ge\tfrac34-|w|>\tfrac14>\delta\ge|\varphi(z)|=|F(z)-G(z)| .
$$
En particulier $G$ ne s'annule pas sur $\Gamma$, ni $F$ (sinon $|F-G|=|G|$) ; aucune n'a de pôle. Donc $Z(F,U)=Z(G,U)=1$ : comptée avec multiplicité, $f-w$ a **exactement un** zéro dans $D(0,\frac34)$ ; étant seul et de multiplicité totale $1$, il est simple. On le note $g(w)$. (On peut aussi le voir directement : sur $D(0,\frac34)$, la question 1 avec $s=\frac34$ donne $|\varphi'|\le4\delta<1$, donc $f'=1+\varphi'$ ne s'y annule pas.) Enfin $g(w)-w=-\varphi(g(w))$, d'où $|g(w)-w|\le\delta$.

**3.** *Formule intégrale.* Soit $w\in D(0,\frac12)$. La fonction $R_w(z)=\dfrac{zf'(z)}{f(z)-w}$ est méromorphe sur l'ouvert simplement connexe (convexe) $D(0,1)$ ; ses pôles sont parmi les zéros de $f-w$, et d'après 2 le seul qui soit dans $\bar D(0,\frac34)$ est $g(w)$, zéro simple. Le lacet $C(0,\frac34)$ évite les pôles ; l'indice vaut $1$ en $g(w)$ et $0$ en tout point de module $>\frac34$ ([[ch02-indice-cercle]]). Comme $f-w$ a un zéro simple en $g(w)$, le résidu vaut ([[ch02-residu-pole-simple]], complément 2) $\frac{g(w)f'(g(w))}{f'(g(w))}=g(w)$. La formule des résidus ([[ch02-formule-residus]]) donne
$$
g(w)=\frac1{2i\pi}\int_{C(0,3/4)}\frac{z\,f'(z)}{f(z)-w}\,dz\qquad(|w|<\tfrac12).
$$
*Holomorphie.* Soit $\eta=\frac12(\frac14-\delta)>0$ et $A=\{\frac34-\eta<|z|<\frac34+\eta\}\subset D(0,1)$. Pour $z\in A$ et $|w|<\frac12$ : $|f(z)-w|\ge|z|-\delta-|w|>\frac34-\eta-\delta-\frac12=\eta>0$. La fonction $(w,z)\mapsto\frac{zf'(z)}{f(z)-w}$ est donc continue sur $D(0,\frac12)\times A$ et holomorphe en $w$ ; par [[ch01-integrale-chemin-parametre]] (chemin $C(0,\frac34)$ dans l'ouvert $A$), $g$ est holomorphe sur $D(0,\frac12)$.

*Conséquences.* $\psi=g-\id$ est holomorphe sur $D(0,\frac12)$ et $|\psi(w)|=|g(w)-w|\le\delta$ : $\psi\in E_{1/2}$ et $\norm\psi_{1/2}\le\norm\varphi_1$. L'équation $f(g(w))=w$ s'écrit $g(w)+\varphi(g(w))=w$, soit $\psi(w)=-\varphi(w+\psi(w))$.

*Unicité.* Si $\chi\in E_{1/2}$, $\norm\chi_{1/2}\le\frac14$ et $\chi=-\varphi\circ(\id+\chi)$, alors pour $|w|<\frac12$, $z=w+\chi(w)$ vérifie $|z|<\frac34$ et $f(z)=w+\chi(w)+\varphi(w+\chi(w))=w$ ; par l'unicité du 2, $z=g(w)$, donc $\chi=\psi$.

**4. a)** *Bonne définition.* Si $\chi\in\mathcal O$ et $|z|<\frac12$, alors $|z+\chi(z)|<\frac12+\frac38=\frac78$. Donc $\varphi\circ(\id+\chi)$ est holomorphe sur $D(0,\frac12)$ (composée), bornée par $\norm\varphi_1$ : $C(\varphi,\chi)\in E_{1/2}$. Par la question 1 avec $s=\frac78$, sur $D(0,\frac78)$ :
$$
|\varphi'|\le8\norm\varphi_1,\qquad|\varphi''|\le128\norm\varphi_1,\qquad\varphi\ \text{est } 8\norm\varphi_1\text{-lipschitzienne}.
$$
*Différentiabilité en $(\varphi,\chi)\in E_1\times\mathcal O$.* On munit $E_1\times E_{1/2}$ de la norme $\max(\norm h_1,\norm k_{1/2})$. Posons
$$
L(h,k)=h\circ(\id+\chi)+\big(\varphi'\circ(\id+\chi)\big)\,k .
$$
$L$ est linéaire, à valeurs dans $E_{1/2}$, et $\norm{L(h,k)}_{1/2}\le\norm h_1+8\norm\varphi_1\norm k_{1/2}$ : $L$ est continue. Soient $h\in E_1$ et $k\in E_{1/2}$ avec $\chi+k\in\mathcal O$. Pour $|z|<\frac12$, notons $\omega=z+\chi(z)$ et $u=k(z)$ ; $\omega$ et $\omega+u$ sont dans le disque convexe $D(0,\frac78)$. Alors
$$
C(\varphi+h,\chi+k)(z)-C(\varphi,\chi)(z)-L(h,k)(z)=\underbrace{h(\omega+u)-h(\omega)}_{(\mathrm i)}+\underbrace{\varphi(\omega+u)-\varphi(\omega)-\varphi'(\omega)u}_{(\mathrm{ii})}.
$$
(i) : $|h(\omega+u)-h(\omega)|\le8\norm h_1|u|$ (lipschitzianité de $h$ sur $D(0,\frac78)$). (ii) : la fonction $t\mapsto\varphi(\omega+tu)$, définie sur un intervalle ouvert contenant $[0,1]$ (car $D(0,\frac78)$ est ouvert), est $C^2$ de dérivée seconde $\varphi''(\omega+tu)u^2$, bornée par $128\norm\varphi_1|u|^2$ sur $[0,1]$ ; Taylor–Lagrange à l'ordre $1$ ([[ch05-taylor-lagrange-1d]]) donne $|(\mathrm{ii})|\le64\norm\varphi_1|u|^2$. Donc
$$
\norm{C(\varphi+h,\chi+k)-C(\varphi,\chi)-L(h,k)}_{1/2}\le\big(8+64\norm\varphi_1\big)\max(\norm h_1,\norm k_{1/2})^2,
$$
qui est un $o(\norm{(h,k)})$ : $C$ est différentiable en $(\varphi,\chi)$ ([[ch05-differentielle-def]]) et
$$
dC_{(\varphi,\chi)}(h,k)=h\circ(\id+\chi)+\big(\varphi'\circ(\id+\chi)\big)\,k .
$$
*Continuité de $dC$.* Pour $(\varphi_1,\chi_1),(\varphi_2,\chi_2)\in E_1\times\mathcal O$ et $\norm{(h,k)}\le1$ :
$$
\begin{aligned}
\norm{dC_{(\varphi_1,\chi_1)}(h,k)-dC_{(\varphi_2,\chi_2)}(h,k)}_{1/2}
&\le\norm{h\circ(\id+\chi_1)-h\circ(\id+\chi_2)}+\norm{(\varphi_1-\varphi_2)'\circ(\id+\chi_1)}+\norm{\varphi_2'\circ(\id+\chi_1)-\varphi_2'\circ(\id+\chi_2)}\\
&\le8\norm{\chi_1-\chi_2}_{1/2}+8\norm{\varphi_1-\varphi_2}_1+128\norm{\varphi_2}_1\norm{\chi_1-\chi_2}_{1/2},
\end{aligned}
$$
(la dernière majoration : $\varphi_2'$ est $128\norm{\varphi_2}_1$-lipschitzienne sur $D(0,\frac78)$, même argument qu'en 1 avec $\varphi_2''$). Donc $(\varphi,\chi)\mapsto dC_{(\varphi,\chi)}$ est continue (localement lipschitzienne) : $C$ est de classe $C^1$ sur l'ouvert $E_1\times\mathcal O$.

**b)** Fixons $\eps_0\in\,]0,\frac14[$ et posons $\Lambda=B_{E_1}(0,\eps_0)$ (ouvert), $X=\bar B_{E_{1/2}}(0,\eps_0)$ (fermé convexe de l'espace de Banach $E_{1/2}$), et $G(\varphi,\chi)=-C(\varphi,\chi)$. Vérifions les hypothèses du point fixe à paramètre ([[ch06-point-fixe-parametre-cp]], avec $p=1$) :

* *Régularité.* $X\subset\mathcal O$ (car $\eps_0<\frac38$), donc $G$ est la restriction à $\Lambda\times X$ d'une application $C^1$ sur l'ouvert $E_1\times\mathcal O$ : elle est $C^1$ au sens de [[ch06-differentiable-sur-partie-def]].
* *Stabilité.* $\norm{G(\varphi,\chi)}_{1/2}\le\norm\varphi_1<\eps_0$ : $G(\Lambda\times X)\subset X$.
* *Contraction uniforme.* $\frac{\partial G}{\partial\chi}(\varphi,\chi)k=-\big(\varphi'\circ(\id+\chi)\big)k$. Pour $\chi\in X$ et $|z|<\frac12$, $|z+\chi(z)|<\frac12+\eps_0$, et la question 1 avec $s=\frac12+\eps_0$ donne
$$
\Big\|\frac{\partial G}{\partial\chi}(\varphi,\chi)\Big\|\le\frac{\norm\varphi_1}{\frac12-\eps_0}\le\frac{\eps_0}{\frac12-\eps_0}=:a<1\quad(\text{car }\eps_0<\tfrac14).
$$

Le théorème fournit, pour $\varphi\in\Lambda$, un unique point fixe $\tilde I(\varphi)\in X$ de $G(\varphi,\cdot)$, et $\tilde I$ est $C^1$ sur $\Lambda$. Or $I(\varphi)=\psi$ est un point fixe de $G(\varphi,\cdot)$ (question 3) qui appartient à $X$ ($\norm\psi_{1/2}\le\norm\varphi_1<\eps_0$) : $I=\tilde I$ sur $\Lambda$. Comme $\mathcal U=\bigcup_{\eps_0<1/4}B_{E_1}(0,\eps_0)$ et que la classe $C^1$ est une propriété locale, $I$ est $C^1$ sur $\mathcal U$.

*Différentielle.* Le théorème donne $dI_\varphi=\big(\id-\frac{\partial G}{\partial\chi}(\varphi,\psi)\big)^{-1}\circ\frac{\partial G}{\partial\varphi}(\varphi,\psi)$, avec $\id+\psi=g$ :
$$
\frac{\partial G}{\partial\varphi}(\varphi,\psi)h=-h\circ g,\qquad\Big(\id-\frac{\partial G}{\partial\chi}(\varphi,\psi)\Big)k=\big(1+\varphi'\circ g\big)k=(f'\circ g)\,k .
$$
On a $|\varphi'\circ g|\le a<1$, donc $1/(f'\circ g)\in E_{1/2}$ et l'inverse est $k\mapsto k/(f'\circ g)$. En dérivant $f(g(w))=w$ : $f'(g(w))\,g'(w)=1$. D'où
$$
dI_\varphi(h)=-\frac{h\circ g}{f'\circ g}=-\,g'\cdot(h\circ g).
$$
Pour $\varphi=0$ : $g=\id$, donc $dI_0(h)=-h_{|D(0,1/2)}$. Interprétation : **au premier ordre, l'inverse de $\id+\varphi$ est $\id-\varphi$** (comme $(1+x)^{-1}\approx1-x$).

**5.** Les solutions de $\eps z^2+z=w$ sont $z_\pm=\frac{-1\pm\sqrt{1+4\eps w}}{2\eps}$, où $\sqrt{\cdot}$ est la racine carrée principale ([[ch02-puissance-complexe-def]]) : pour $|w|<\frac12$, $1+4\eps w\in D(1,\frac12)$, d'où $\Re\sqrt{1+4\eps w}>0$. Alors $|z_-|\ge\frac{1}{2\eps}>2$, donc $z_-\notin D(0,\frac34)$, et d'après 2 :
$$
g(w)=\frac{\sqrt{1+4\eps w}-1}{2\eps}.
$$
Avec $\sqrt{1+u}=1+\frac u2-\frac{u^2}8+\frac{u^3}{16}+O(u^4)$ et $u=4\eps w$ (uniformément pour $|w|<\frac12$) :
$$
I(\varphi_\eps)(w)=g(w)-w=-\eps w^2+2\eps^2w^3+O(\eps^3).
$$
Le terme d'ordre $1$ est $-\eps w^2=dI_0(\varphi_\eps)(w)$, conformément au 4 b).

*Vérification de la différentielle.* $\eps\mapsto\varphi_\eps=\eps z^2$ est affine de dérivée $z^2$ ; par la règle de la chaîne et la continuité de l'évaluation en $w$ ($|u(w)|\le\norm u_{1/2}$),
$$
\frac{d}{d\eps}\big(I(\varphi_\eps)\big)(w)=dI_{\varphi_\eps}(z^2)(w)=-g'(w)\,g(w)^2 .
$$
Directement : dériver $\eps g^2+g=w$ en $\eps$ donne $g^2+(2\eps g+1)\partial_\eps g=0$, et en $w$ donne $(2\eps g+1)g'=1$. Donc $\partial_\eps g=-\dfrac{g^2}{1+2\eps g}=-g'g^2$, et comme $\partial_\eps(g-w)=\partial_\eps g$, les deux calculs coïncident. (Vérifié aussi symboliquement, et numériquement pour $\varphi(z)=0{,}15z^3-0{,}05+0{,}03e^z$ et $h(z)=z^2+\frac12$ : le quotient différentiel $\frac{I(\varphi+th)-I(\varphi)}{t}$, $t=10^{-6}$, coïncide avec $-g'\cdot(h\circ g)$ à $10^{-6}$ près en quatre points de $D(0,\frac12)$.)

## Pièges et variantes

> ⚠️ **Perte de domaine.** $C(\varphi,\chi)=\varphi\circ(\id+\chi)$ n'a aucune chance d'être différentiable de $E_1\times E_1$ dans $E_1$ : $\id+\chi$ peut sortir du disque, et $\varphi'$ n'est pas bornée sur $D(0,1)$. Tout repose sur le fait qu'on évalue sur un disque **plus petit**, où les estimées de Cauchy bornent $\varphi'$ et $\varphi''$ par $\norm\varphi_1$. C'est pourquoi $I$ va de $E_1$ dans $E_{1/2}$.

* Le théorème du point fixe à paramètre exige une constante $a<1$ **uniforme** sur $\Lambda\times X$ : sur tout $\mathcal U$, la borne $\frac{\norm\varphi_1}{1/2-\norm\varphi_1}$ tend vers $1$. On travaille donc sur $B(0,\eps_0)$, $\eps_0<\frac14$, puis on recolle (la régularité est locale).
* Il faut aussi que $G$ soit $C^1$ sur un **ouvert** contenant $\Lambda\times X$ (d'où $\mathcal O$, plus gros que $X$) : $X$ est fermé, la différentiabilité sur $X$ seul n'a pas de sens direct.
* Rouché demande l'inégalité **stricte** sur tout le cercle : elle utilise $|w|<\frac12$ et $\norm\varphi_1<\frac14$ ; pour $|w|=\frac12$ et $\norm\varphi_1=\frac14$ l'argument tombe.
* Erreur fréquente : écrire $dI_\varphi(h)=-h$ pour tout $\varphi$. Le facteur $g'$ et la composition par $g$ ne disparaissent qu'en $\varphi=0$.
* Variante : un développement à l'ordre $2$ donne $I(\varphi)=-\varphi+\varphi\varphi'+O(\norm\varphi_1^3)$ (sur $D(0,\frac12)$) ; sur l'exemple, $\varphi_\eps\varphi_\eps'=2\eps^2z^3$, ce qui redonne le terme $2\eps^2w^3$.
* Variante : la même méthode inverse $\id+\varphi$ sur $D(0,\rho)$ pour tout $\rho<1$, à condition que $\norm\varphi_1$ soit assez petit devant $1-\rho$ ; et elle s'étend aux applications holomorphes de plusieurs variables (perturbations de l'identité de $\C^n$).
