---
id: rfx-res-homotopie-indice
type: reflexe
situation: Calculer l'indice d'un lacet, montrer que deux lacets sont (ou ne sont pas) homotopes, ou justifier qu'une intégrale de contour est nulle
chapters: [1, 2]
---
## Situation

On a un lacet explicite $\gamma:[0,1]\to\C$ ou $[0,2\pi]\to\C$ (cercle parcouru plusieurs fois, ellipse, limaçon $e^{2it}+\frac12e^{it}$, bord d'un rectangle ou d'un secteur, image $f\circ\gamma$ d'un cercle par une fonction holomorphe) et un ouvert $\Omega$. On veut $\Ind_z(\gamma)$ pour un ou plusieurs points $z$, ou montrer que $\gamma$ est homotope à un lacet plus simple dans $\Omega$, ou au contraire qu'il ne l'est pas, ou que $\int_\gamma f(z)\,dz=0$ (ou la calculer). C'est très souvent l'étape « justifier l'indice » d'un calcul par résidus.

Mots-clés : *homotope dans $\Omega$*, *lacet homotope à un lacet constant*, *indice*, *nombre de tours*, *simplement connexe*, *déformer le contour*, *l'intégrale ne dépend pas de $R$*.

## Options

### [x] Invariance de l'intégrale par homotopie et théorème de Cauchy — [[ch02-invariance-homotopie-integrale]]
**Quand.** $f\in\Hol(\Omega)$ et $\gamma_0,\gamma_1$ sont homotopes **comme lacets dans $\Omega$** ; cas particulier : $\gamma$ homotope à un lacet constant, ou $\Omega$ simplement connexe, et alors $\int_\gamma f=0$ ([[ch02-cauchy-simplement-connexe]]).
**Justification.** $\int_{\gamma_0}f=\int_{\gamma_1}f$ (poly, Théorème II.2.1, p. 37). Pour « déformer le contour » (rectangle qui glisse, cercle qui grossit), c'est ce théorème appliqué sur l'ouvert où $f$ est holomorphe.
**Pièges.** L'homotopie doit rester **dans l'ouvert où $f$ est holomorphe** : aucun lacet intermédiaire ne doit traverser une singularité. Chaque $\gamma_s$ doit être un **lacet** ($\gamma_s(0)=\gamma_s(1)$).

### [x] Indice entier, constant par composantes, nul à l'infini — [[ch02-indice-entier-localement-constant]]
**Quand.** On veut $\Ind_z(\gamma)$ pour beaucoup de points à la fois, ou montrer qu'un indice est nul.
**Justification.** $z\mapsto\Ind_z(\gamma)$ est à valeurs entières, constante sur chaque composante connexe de $\C\setminus\Gamma$, nulle sur la composante non bornée (poly, Proposition II.3.2, p. 40). Donc : un calcul par composante suffit, et tout $z$ avec $|z|>\max_t|\gamma(t)|$ a indice $0$.
**Pièges.** Justifier qu'un point est dans la composante non bornée (par exemple $|z|>\max|\gamma|$, ou un chemin vers l'infini qui évite $\Gamma$). Deux points « du même côté » sur un dessin ne sont pas forcément dans la même composante pour une courbe qui se recoupe.

### [x] Homotopie explicite, affine ou « chien en laisse » — [[ch02-indice-invariance-homotopie]]
**Quand.** $\gamma$ est proche d'un lacet $\gamma_0$ dont on connaît l'indice (typiquement $t\mapsto z_0+re^{int}$, d'indice $n$ en $z_0$) au sens où $|\gamma(t)-\gamma_0(t)|<|\gamma_0(t)-z_0|$ pour **tout** $t$. Alors $H(s,t)=(1-s)\gamma_0(t)+s\gamma(t)$ ne passe jamais par $z_0$ et $\Ind_{z_0}(\gamma)=\Ind_{z_0}(\gamma_0)$. Variante radiale : $H(s,t)=z_0+\frac{\gamma(t)-z_0}{(1-s)+s|\gamma(t)-z_0|}$ ramène $\gamma$ sur le cercle unité centré en $z_0$.
**Justification.** $|H(s,t)-z_0|\ge|\gamma_0(t)-z_0|-s|\gamma(t)-\gamma_0(t)|>0$ ; $H$ est continue, et $H(s,0)=H(s,1)$ pour tout $s$ : c'est une homotopie de lacets dans $\C\setminus\{z_0\}$ (poly, Proposition II.3.4, p. 41).
**Pièges.** Écrire $H$, vérifier les trois points (continuité, lacet pour chaque $s$, évitement de $z_0$ ou du complémentaire de $\Omega$). Dans un ouvert **convexe**, l'homotopie affine entre deux lacets quelconques convient toujours ; dans un étoilé, contracter vers le centre.

### [x] Calcul par primitive ou par la formule des résidus — [[ch02-formule-residus]]
**Quand.** On veut $\int_\gamma f$ avec $f$ méromorphe sur un ouvert simplement connexe (souvent $\C$) : $\int_\gamma f=2i\pi\sum_s\Res_s(f)\Ind_s(\gamma)$. Si $f$ admet une primitive sur un ouvert contenant $\gamma$ ($z^n$ avec $n\ne-1$, $\frac{1}{(z-a)^2}$, une dérivée), l'intégrale est nulle **quel que soit l'indice** ([[ch01-integrale-primitive]]).
**Justification.** Formule des résidus avec indices (poly, Théorème II.5.1, p. 47) ; l'hypothèse « simplement connexe » peut être remplacée par « $\gamma$ homotope à un lacet constant dans $\Omega$ » ([[ch02-residus-hypothese-homotope-remarque]]).
**Pièges.** Aucun pôle **sur** $\gamma$. Pour $\Ind_0(f\circ\gamma)$ (lacet image), utiliser $\Ind_0(f\circ\gamma)=\frac1{2i\pi}\int_\gamma\frac{f'}{f}$, puis le principe de l'argument ([[ch02-principe-argument]]).

### [ ] Théorème de Jordan — [[ch02-jordan-remarque]]
**Pourquoi ce n'est pas l'outil ici.** Il est **admis** dans le poly, ne concerne que les lacets **simples**, et ne donne ni le signe ni la valeur de l'indice d'un lacet concret. Le poly lui-même dit que l'indice $1$ d'un bord de domaine est « très facile à justifier en utilisant l'invariance par homotopie de l'indice et en déformant continûment $\gamma$ en un cercle » (poly, § II.6, p. 48) : c'est cette homotopie que le correcteur attend.
**Quand il le serait.** Pour savoir qu'un lacet simple sépare le plan en exactement deux composantes, quand l'énoncé autorise à l'utiliser.

## Démarche

1. **Intégrale $\int_\gamma f$.** Si $f$ a une primitive sur un ouvert contenant $\gamma$ → $0$. Sinon, si $f$ est holomorphe sur un ouvert simplement connexe (étoilé, en donnant le centre) contenant $\gamma$ → $0$ par Cauchy. Sinon → formule des résidus avec indices (aller en 2 pour les indices).
2. **Indices.**
   * Cercle ou lacet paramétré simplement → calcul direct de $\frac1{2i\pi}\int_0^{T}\frac{\gamma'(t)}{\gamma(t)-z}dt$ (par exemple $\gamma(t)=z_0+re^{int}$ donne $n$).
   * Lacet proche d'un lacet connu → homotopie affine « chien en laisse ».
   * Beaucoup de points → un calcul par composante connexe de $\C\setminus\Gamma$, et $0$ sur la composante non bornée.
   * Lacet écrit $\gamma(t)-z=\rho(t)e^{i\theta(t)}$ avec $\theta$ continue → $\Ind_z(\gamma)=\frac{\theta(T)-\theta(0)}{2\pi}$ (car $\frac{\gamma'}{\gamma-z}=\frac{\rho'}{\rho}+i\theta'$).
3. **Homotopie de deux lacets.** Écrire $H(s,t)$ explicitement et vérifier qu'il reste dans $\Omega$. **Non-homotopie** : trouver $f\in\Hol(\Omega)$ (typiquement $\frac1{z-a}$ avec $a\notin\Omega$) telle que $\int_{\gamma_0}f\ne\int_{\gamma_1}f$ ; c'est la contraposée de l'invariance.
4. **Contour qui dépend d'un paramètre** (rectangle de hauteur $\lambda$, cercle de rayon $R$) → pour montrer que l'intégrale ne dépend pas du paramètre : homotopie entre deux contours dans l'ouvert d'holomorphie, ou formule des résidus donnant la même somme.

## Pièges

* Une homotopie qui passe par un pôle de $f$ ou sort de $\Omega$ (par exemple déformer un cercle autour de $0$ en un point dans $\C^\times$).
* Une homotopie de **chemins** (extrémités fixes) confondue avec une homotopie de **lacets** : pour les intégrales de lacets, il faut que chaque $\gamma_s$ soit fermé.
* Oublier que l'indice d'un cercle parcouru dans le sens indirect vaut $-1$, ou $n$ pour un cercle parcouru $n$ fois.
* Invoquer « Jordan » ou « on voit sur le dessin » au lieu d'une homotopie ou d'un calcul.
* Pour un lacet qui se recoupe, affirmer que l'indice vaut $1$ « à l'intérieur ».

## Mini-exemple

*Énoncé.* Soit $\gamma(t)=e^{2it}+\frac12e^{it}$, $t\in[0,2\pi]$. Calculer $I=\displaystyle\int_\gamma\frac{dz}{z(z-3)}$ ; $\gamma$ est-il homotope à $C(0,1)$ dans $\C^\times$ ?

*Solution.* **Indice en $0$.** Avec $\gamma_0(t)=e^{2it}$ : $|\gamma(t)-\gamma_0(t)|=\frac12<1=|\gamma_0(t)|$. Donc $H(s,t)=e^{2it}+\frac s2e^{it}$ vérifie $|H(s,t)|\ge1-\frac12>0$, est continue et $H(s,0)=H(s,2\pi)$ : homotopie de lacets dans $\C^\times$, d'où $\Ind_0(\gamma)=\Ind_0(\gamma_0)=\frac1{2i\pi}\int_0^{2\pi}\frac{2ie^{2it}}{e^{2it}}dt=2$.
**Indice en $3$.** $|\gamma(t)|\le\frac32<3$ : $3$ est dans la composante non bornée, $\Ind_3(\gamma)=0$.
**Intégrale.** $f(z)=\frac1{z(z-3)}$ est méromorphe sur $\C$ (simplement connexe), $\Res_0(f)=-\frac13$, $\Res_3(f)=\frac13$, donc $I=2i\pi\big(2\cdot(-\tfrac13)+0\cdot\tfrac13\big)=-\dfrac{4i\pi}{3}$.
**Homotopie.** Non : $\frac1z\in\Hol(\C^\times)$ et $\int_\gamma\frac{dz}z=4i\pi\ne2i\pi=\int_{C(0,1)}\frac{dz}z$. (L'indice $2$ montre au passage que $\gamma$ se recoupe : un lacet simple a toujours un indice dans $\{-1,0,1\}$, fait admis lié au théorème de Jordan.)
